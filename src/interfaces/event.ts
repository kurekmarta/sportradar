import { ICompetitor } from './competitor'
import { IVenue } from './venue'

export interface IEvent {
	sport_event_id?: string
	start_date?: string
	sport_name?: string
	competition_name?: string
	competition_id?: string
	season_name?: string
	competitors?: ICompetitor[]
	venue?: IVenue
	probability_home_team_winner: number
	probability_draw: number
	probability_away_team_winner: number
}
