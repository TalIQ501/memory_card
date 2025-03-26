import { getRandom } from "./utils";

export const getTeam = data => {
    let team = null;

    while (team === null) {
        const randID = getRandom(0, 1000);
        team = data.find(entry => entry.team.id === randID)?.team || null;
    }

    return team
}