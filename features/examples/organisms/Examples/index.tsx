import Clock from '@app/ui/atoms/Clock'
import Counter from '@app/ui/atoms/Counter'

interface Props {
  lastUpdate: number
  light: boolean
  count: number

  inc(): void
  dec(): void
  reset(): void
}

export default ({ lastUpdate, light, count, ...actions }: Props) => (
  <div>
    <Clock lastUpdate={lastUpdate} light={light} />
    <Counter count={count} {...actions} />
  </div>
)
