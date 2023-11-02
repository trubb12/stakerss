console.log("############################################");
console.log("#        Hi there technical person         #");
console.log("############################################");

const _NETWORK_ID = 137;
let _CONTRACT_DATA = {};

const _API_URL = 'https://7yjhmmd390.execute-api.ap-south-1.amazonaws.com/prod'

_CONTRACT_DATA[_NETWORK_ID] = {
    network_name: "Polygon Mainnet",
    explorer_url: 'https://polygonscan.com',
    STACKING: {
        sevenDays: {
            address: '0x15835A463223E6e60dc4728aD40116c603E87fAe',
        },
        tenDays: {
            address: '0x15835A463223E6e60dc4728aD40116c603E87fAe'
        },
        thirtyTwoDays: {
            address: '0x15835A463223E6e60dc4728aD40116c603E87fAe'
        },
        ninetyDays: {
            address: '0x15835A463223E6e60dc4728aD40116c603E87fAe'
        },
        abi: [{"inputs":[],"name":"getUserEstimatedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getMinimumStakingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeEndDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeStartDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakingStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalStakedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEarlyUnstakeFeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAPY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Stake","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"UnStake","type":"event"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUser","outputs":[{"components":[{"internalType":"uint256","name":"stakeAmount","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"uint256","name":"lastStakeTime","type":"uint256"},{"internalType":"uint256","name":"lastRewardCalculationTime","type":"uint256"},{"internalType":"uint256","name":"rewardsClaimedSoFar","type":"uint256"}],"internalType":"struct TokenStaking.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}],
    },
    TOKEN: {
        symbol: 'USDT',
        address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        abi: [{"inputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],
    }
};

/* countdown global */

let countDownGlobal;

/* wallet connection */

let web3;

let oContractToken;

let isMetamaskConnected;

let selectedAccount;

let web3Main = new Web3('https://rpc.ankr.com/polygon');

// Create an instance of Notyf
var notyf = new Notyf({
    duration: 3000,
    position: {x: 'right', y: 'bottom'}
});

// hide logs
console.log = () => {};
