import { peruLeaders } from './LeaderDataProvider.js'
import { peruLeader } from './Leader.js'

const usePeruLeader = peruLeaders()
const leardersUI = document.querySelector('.leadersUI')

export const leadersList = () => {
  usePeruLeader.forEach(leader => {
    leardersUI.innerHTML += peruLeader(leader)
  });
  return leardersUI
}