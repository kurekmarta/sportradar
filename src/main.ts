import file from '../BE_data.json'
import { ICompetitor } from './interfaces/competitor'
import { IEvent } from './interfaces/event'
import { IEventDetails } from './interfaces/event_details'
import { IVenue } from './interfaces/venue'

export class Main {
	data: IEvent[] = []
	eventDetailsTable: IEventDetails[] = []
	constructor() {
		this.mapData()
		this.get10()
		this.printResult()
	}

	printResult() {
		for (let x = 0; x < 10; x++) {
			const el = document.createElement('div')
			const div1 = document.createElement('div')
			div1.textContent = 'Start date: ' + this.eventDetailsTable[x].start_date
			const div2 = document.createElement('div')
			div2.textContent = `${this.eventDetailsTable[x].competitors[0].name} (${this.eventDetailsTable[x].competitors[0].country}) vs. ${this.eventDetailsTable[x].competitors[1].name} (${this.eventDetailsTable[x].competitors[1].country})`
			const div3 = document.createElement('div')
			div3.textContent = `Venue: ${this.eventDetailsTable[x].venue?.name}`
			const div4 = document.createElement('div')
			div4.textContent =
				'Highest probable result : ' +
				this.eventDetailsTable[x].result_name +
				' (' +
				this.eventDetailsTable[x].probability +
				')'
			const p = document.createElement('p')

			el.appendChild(div1)
			el.appendChild(div2)
			el.appendChild(div3)
			el.appendChild(div4)
			el.appendChild(p)
			document.body.appendChild(el)
		}
	}

	get10() {
		for (let k = 0; k < this.data.length; k++) {
			let event = this.data[k]

			let newEvent = <IEventDetails>{
				sport_event_id: event.sport_event_id,
				start_date: event.start_date,
				competitors: event.competitors,
				venue: event.venue,
			}

			if (
				event.probability_home_team_winner > event.probability_away_team_winner &&
				event.probability_home_team_winner > event.probability_draw
			) {
				newEvent.result_name = `HOME_TEAM_WIN`
				newEvent.probability = event.probability_home_team_winner
				this.eventDetailsTable.push(newEvent)
			} else if (
				event.probability_away_team_winner > event.probability_home_team_winner &&
				event.probability_away_team_winner > event.probability_draw
			) {
				newEvent.result_name = `AWAY_TEAM_WIN`
				newEvent.probability = event.probability_away_team_winner
				this.eventDetailsTable.push(newEvent)
			} else {
				newEvent.result_name = `DRAW`
				newEvent.probability = event.probability_draw
				this.eventDetailsTable.push(newEvent)
			}

			this.eventDetailsTable.sort((a, b) => (a.probability < b.probability ? 1 : -1))
		}
	}

	mapData() {
		for (let i = 0; i < file.Events.length; i++) {
			let event = file.Events[i]
			let newEvent = <IEvent>{
				sport_event_id: event.sport_event_id,
				start_date: event.start_date,
				sport_name: event.sport_name,
				competition_name: event.competition_name,
				competition_id: event.competition_id,
				season_name: event.season_name,
				venue: <IVenue>{
					id: event.venue?.id,
					name: event.venue?.name,
					capacity: event.venue?.capacity,
					city_name: event.venue?.city_name,
					country_name: event.venue?.country_name,
					map_cooridinates: event.venue?.map_coordinates,
					country_code: event.venue?.country_code,
				},
				probability_home_team_winner: event.probability_home_team_winner,
				probability_draw: event.probability_draw,
				probability_away_team_winner: event.probability_away_team_winner,
			}
			let competitors = []

			for (let j = 0; j < event.competitors.length; j++) {
				let competitor = event.competitors[j]
				let newCompetitor = <ICompetitor>{
					id: competitor.id,
					name: competitor.name,
					country: competitor.country,
					country_code: competitor.country_code,
					abbreviation: competitor.abbreviation,
					qualifier: competitor.qualifier,
					gender: competitor.gender,
				}
				competitors.push(newCompetitor)
			}
			newEvent.competitors = competitors
			this.data.push(newEvent)
		}
	}
}
let test = new Main()
