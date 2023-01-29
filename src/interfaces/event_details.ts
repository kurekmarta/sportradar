import { ICompetitor } from './competitor'
import { IVenue } from './venue'

export interface IEventDetails {
	sport_event_id?: string
	start_date?: Date
	competitors?: ICompetitor[]
	venue?: IVenue
	result_name?: string
	probability: number
}
