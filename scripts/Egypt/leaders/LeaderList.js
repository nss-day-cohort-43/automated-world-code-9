import { egyptLeader } from './LeaderDataProvider.js'
import { egyptLeader } from './Leader.js'

const useEgyptLeader = egyptLeader()
const leardersUI = document.querySelector('.leadersUI')

export const leaderList = () => {
  useEgyptLeader.forEach(leader => {
    leadersUI.innerHTML += egyptLeader(leader)
  });
  return useEgyptLeader
}