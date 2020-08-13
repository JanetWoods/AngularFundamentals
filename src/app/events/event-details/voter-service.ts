import { Injectable } from '@angular/core'
import { ISession } from '../shared/event.model';

@Injectable()
export class VoterService {

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  //returns a boolean. If 'voterName' doesn't find its match among all 'voter's in the session.voters then it returns false.
  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }
}
