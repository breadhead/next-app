import { Clock } from '@app/ui/Clock'
import { Counter } from '@app/ui/Counter'

interface Props {
  lastUpdate: number
  light: boolean
  count: number

  inc(): void
  dec(): void
  reset(): void
}

export const Examples = ({ lastUpdate, light, count, ...actions }: Props) => (
  <div>
    <Clock lastUpdate={lastUpdate} light={light} />
    <Counter count={count} {...actions} />
  </div>
)
