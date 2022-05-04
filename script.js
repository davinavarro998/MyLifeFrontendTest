var web3 = new Web3(ethereum);

var abi = [
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_minimum_bid",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_prize",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_who",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_bidValue",
          "type": "uint256"
        }
      ],
      "name": "Bid",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_who",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_minimum_bid",
          "type": "uint256"
        }
      ],
      "name": "ResetAuction",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "StartAuction",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "StopAuction",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_who",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "UnwrapEth",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_who",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_who",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "WrapEth",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "beneficiary",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "ethDeposited",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "highestBid",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "highestBidder",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isActive",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "prize",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "wethAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "wethBidded",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "startAuction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "wrap",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "unwrap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "bid",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stopAuction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "amountEthInContract",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "recover",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
var wethAddress = '0xfa5CeDc40426b7F736d2d13496Fd840cECB29764';
var prizeAddress = '0x16011ba20cD8244948d5e5966d8736fAf36e3D03';
var currentBalanceSpace = document.querySelectorAll('.box5 span')[1];
var currentBidSpace = document.querySelectorAll('.box6 span')[1];
var highestBidderSpace = document.querySelectorAll('.box7 span')[1];
var wethAddressSpace = document.querySelectorAll('.box8 span')[1];
var nftAddressSpace = document.querySelectorAll('.box9 span')[1];
wethAddressSpace.innerHTML = wethAddress;
nftAddressSpace.innerHTML = prizeAddress;

var startAuctionButton = document.querySelectorAll('.box1 button')[0];
var stopAuctionButton = document.querySelectorAll('.box1 button')[1];

var isActiveSpace = document.querySelector('header h2');

var wrapEtherButton = document.querySelector('.box2 button');
var wrapInput = document.querySelector('.box2 input');

var unwrapEtherButton = document.querySelector('.box3 button');
var unwrapInput = document.querySelector('.box3 input');

var bidButton = document.querySelector('.box4 button');
var bidInput = document.querySelector('.box4 input');

const isContractActive = async ()=>{
    if(ethereum){
        let myContract = new web3.eth.Contract(abi, wethAddress);
        let sendCall = await myContract.methods.isActive().call();
        return sendCall;
    } else{
        alert('No wallet detected');
    }
}

isContractActive().then((res)=>{
    if(res){
        isActiveSpace.innerHTML = `Contract is active`;
        isActiveSpace.style.color = `green`;
    } else{
        isActiveSpace.innerHTML = `Contract is not active`;
        isActiveSpace.style.color = `red`;
    }
}).catch((err)=>{
    console.error(err);
});


const currentBalance = async ()=>{
    if(ethereum){
        let accounts = await ethereum.request({method:'eth_requestAccounts'});
        let account = accounts[0];
        let myContract = new web3.eth.Contract(abi, wethAddress);
        let sendCall = await myContract.methods.wethAmount(account).call();
        return sendCall;
    } else{
        alert('No wallet detected');
    }
}

currentBalance().then((res)=>{
    let reducedNumber = Number(res) / (10 ** 18);
    currentBalanceSpace.innerHTML = `${reducedNumber} WETH`;
}).catch((err)=>{
    console.error(err);
});


const currentBid = async ()=>{
    if(ethereum){
        let myContract = new web3.eth.Contract(abi, wethAddress);
        let sendCall = await myContract.methods.highestBid().call();
        return sendCall;
    } else{
        alert('No wallet detected');
    }
}

currentBid().then((res)=>{
    let reducedNumber = Number(res) / (10 ** 18);
    currentBidSpace.innerHTML = `${reducedNumber} WETH`;
}).catch((err)=>{
    console.error(err);
});

const highestBidder = async ()=>{
    if(ethereum){
        let myContract = new web3.eth.Contract(abi, wethAddress);
        let sendCall = await myContract.methods.highestBidder().call();
        return sendCall;
    } else{
        alert('No wallet detected');
    }
}

highestBidder().then((res)=>{
    highestBidderSpace.innerHTML = `${res}`;
}).catch((err)=>{
    console.error(err);
});

const startAuction = async ()=>{
    if(ethereum){
        let accounts = await ethereum.request({method:'eth_requestAccounts'});
        let account = accounts[0];
        let myContract = new web3.eth.Contract(abi, wethAddress);
        let sendCall = await myContract.methods.startAuction().send({from:account});
        return sendCall;
    } else{
        alert('No wallet detected');
    }
}

startAuctionButton.addEventListener('click', ()=>{
    startAuction().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
});


const stopAuction = async ()=>{
    if(ethereum){
        let accounts = await ethereum.request({method:'eth_requestAccounts'});
        let account = accounts[0];
        let myContract = new web3.eth.Contract(abi, wethAddress);
        let sendCall = await myContract.methods.stopAuction().send({from:account});
        return sendCall;
    } else{
        alert('No wallet detected');
    }
}


stopAuctionButton.addEventListener('click', ()=>{
    stopAuction().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
});



const wrapEther = async (_amount)=>{
    if(ethereum){
        let accounts = await ethereum.request({method:'eth_requestAccounts'});
        let account = accounts[0];
        let myContract = new web3.eth.Contract(abi, wethAddress);
        let sendCall = await myContract.methods.wrap().send({from:account, value:_amount});
        return sendCall;
    } else{
        alert('No wallet detected');
    }
}


wrapEtherButton.addEventListener('click', ()=>{
    let bigNumber = Number(wrapInput.value) * 10 ** 18;
    wrapEther(bigNumber).then((res)=>{
        alert(`You wrapped ${wrapInput.value} ETH`);
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
});


const unwrapEther = async (_amount)=>{
    if(ethereum){
        let accounts = await ethereum.request({method:'eth_requestAccounts'});
        let account = accounts[0];
        let myContract = new web3.eth.Contract(abi, wethAddress);
        let sendCall = await myContract.methods.unwrap(_amount).send({from:account});
        return sendCall;
    } else{
        alert('No wallet detected');
    }
}


unwrapEtherButton.addEventListener('click', ()=>{
    let bigNumber = Number(unwrapInput.value) * 10 ** 18;
    unwrapEther(BigInt(bigNumber)).then((res)=>{
        alert(`You unwrapped ${unwrapInput.value} ETH`);
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
});


const bid = async (_amount)=>{
    if(ethereum){
        let accounts = await ethereum.request({method:'eth_requestAccounts'});
        let account = accounts[0];
        let myContract = new web3.eth.Contract(abi, wethAddress);
        let sendCall = await myContract.methods.bid(_amount).send({from:account});
        return sendCall;
    } else{
        alert('No wallet detected');
    }
}


bidButton.addEventListener('click', ()=>{
    let bigNumber = Number(bidInput.value) * 10 ** 18;
    bid(BigInt(bigNumber)).then((res)=>{
        alert(`You bidded ${bidInput.value} ETH`);
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
});
