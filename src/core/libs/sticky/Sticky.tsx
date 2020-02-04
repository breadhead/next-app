import React, { Component } from 'react';

import { ContainerContext } from './Container';

type StickyProps = {
  relative?: boolean;
  children?: any;
} & DefaultProps;

interface DefaultProps {
  topOffset: 0;
  bottomOffset: 0;
  disableCompensation?: boolean;
  disableHardwareAcceleration?: boolean;
  distanceFromTop?: number;
  distanceFromBottom?: number;
  calculatedHeight?: number;
}

export default class Sticky extends Component<StickyProps> {
  static defaultProps: DefaultProps = {
    topOffset: 0,
    bottomOffset: 0,
    disableCompensation: false,
    calculatedHeight: 0,
  };

  state = {
    isSticky: false,
    wasSticky: false,
    style: {},
    calculatedHeight: 0,
    distanceFromTop: 0,
    distanceFromBottom: 0,
  };

  private readonly placeholderRef;
  private readonly contentRef;

  constructor(props) {
    super(props);
    this.placeholderRef = React.createRef();
    this.contentRef = React.createRef();
  }

  componentDidMount() {
    if (!this.context.subscribe)
      throw new TypeError(
        'Expected Sticky to be mounted within StickyContainer',
      );

    this.context.subscribe(this.handleContainerEvent);
  }

  componentWillUnmount() {
    this.context.unsubscribe(this.handleContainerEvent);
  }

  componentDidUpdate() {
    const placeholder = this.placeholderRef.current;
    if (placeholder) {
      placeholder.style.paddingBottom = this.props.disableCompensation
        ? 0
        : `${
            this.state.isSticky
              ? this.props.calculatedHeight || this.state.calculatedHeight
              : 0
          }px`;
    }
  }

  handleContainerEvent = ({
    distanceFromTop,
    distanceFromBottom,
    eventSource,
  }) => {
    const parent = this.context.getParent();

    let preventingStickyStateChanges = false;
    if (this.props.relative && this.placeholderRef.current) {
      preventingStickyStateChanges = eventSource !== parent;
      distanceFromTop =
        -(eventSource.scrollTop + eventSource.offsetTop) +
        this.placeholderRef.current.offsetTop;
    }

    const placeholderClientRect = this.placeholderRef.current.getBoundingClientRect();
    const contentClientRect = this.contentRef.current.getBoundingClientRect();
    const calculatedHeight = contentClientRect.height;

    const bottomDifference =
      distanceFromBottom - this.props.bottomOffset - calculatedHeight;

    const wasSticky = this.state.isSticky;
    const isSticky = preventingStickyStateChanges
      ? wasSticky
      : distanceFromTop <= -this.props.topOffset &&
        distanceFromBottom > -this.props.bottomOffset;

    distanceFromBottom =
      (this.props.relative
        ? parent.scrollHeight - parent.scrollTop
        : distanceFromBottom) - calculatedHeight;

    const style: any = !isSticky
      ? {}
      : {
          position: 'fixed',
          top:
            bottomDifference > 0
              ? this.props.relative
                ? parent.offsetTop - parent.offsetParent.scrollTop
                : 0
              : bottomDifference,
          left: placeholderClientRect.left,
          width: placeholderClientRect.width,
        };

    this.setState({
      isSticky,
      wasSticky,
      distanceFromTop,
      distanceFromBottom,
      calculatedHeight,
      style,
    });
  };

  render() {
    const element = React.cloneElement(
      this.props.children({
        isSticky: this.state.isSticky,
        wasSticky: this.state.wasSticky,
        distanceFromTop: this.state.distanceFromTop,
        distanceFromBottom: this.state.distanceFromBottom,
        calculatedHeight: this.state.calculatedHeight,
        style: this.state.style,
      }),
      {
        ref: this.contentRef,
      },
    );

    return (
      <div>
        <div ref={this.placeholderRef} />
        {element}
      </div>
    );
  }
}

Sticky.contextType = ContainerContext;
