import { getRandom } from "./utils";

export const fetchTeams = async () => {
    const leagueEnum = [39, 61, 78, 140];

    const len = leagueEnum.length;

    const randLeague = getRandom(0, len) - 1;

    const leagueID = leagueEnum[randLeague];

    try {
        const response = await fetch(
            `https://v3.football.api-sports.io/teams?league=${leagueID}&season=2023`,
            {
                method: "GET",
                headers: {
                    "x-apisports-key": "e8393c44e815c7876d49e964895f7678"
                }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        return data.response;

    } catch (err) {
        console.error("Fetch error:", err);
        return null;
    }
}