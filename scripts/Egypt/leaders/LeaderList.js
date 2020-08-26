import { egyptLeaders } from './LeaderDataProvider.js'
import { egyptLeader } from './Leader.js'

const useEgyptLeader = egyptLeaders()
const leadersUI = document.querySelector('.leadersUI')

export const leadersList = () => {
  useEgyptLeader.forEach(leader => {
    leadersUI.innerHTML += egyptLeader(leader)
  });
  return useEgyptLeader
}