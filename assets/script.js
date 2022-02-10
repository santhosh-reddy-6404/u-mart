// Moralis setup...
const serverUrl = "https://ov0zft8bmuyj.usemoralis.com:2053/server";
const appId = "D6k8tZGdwfnssgTFi33EKvORsT7m8V7vfsHP82nl";
Moralis.start({ serverUrl, appId });

// RPC speedy-nodes & Web3...
const NODE_URL = "https://speedy-nodes-nyc.moralis.io/dd08b911fb86268af02f8642/eth/ropsten";
const provider = new Web3.providers.HttpProvider(NODE_URL);
const web3 = new Web3(provider);
const eth = web3.utils.fromWei('10000000000000000000', 'ether');
console.log(eth);

// Smart Contract.......

const abi = [ 	{ 		"inputs": [], 		"name": "amount", 		"outputs": [ 			{ 				"internalType": "uint256", 				"name": "", 				"type": "uint256" 			} 		], 		"stateMutability": "view", 		"type": "function" 	}, 	{ 		"inputs": [], 		"name": "balance", 		"outputs": [ 			{ 				"internalType": "uint256", 				"name": "", 				"type": "uint256" 			} 		], 		"stateMutability": "view", 		"type": "function" 	}, 	{ 		"inputs": [ 			{ 				"internalType": "uint256", 				"name": "price", 				"type": "uint256" 			} 		], 		"name": "cancel", 		"outputs": [], 		"stateMutability": "nonpayable", 		"type": "function" 	}, 	{ 		"inputs": [ 			{ 				"internalType": "uint256", 				"name": "price", 				"type": "uint256" 			} 		], 		"name": "confirm", 		"outputs": [], 		"stateMutability": "nonpayable", 		"type": "function" 	}, 	{ 		"inputs": [], 		"name": "owner", 		"outputs": [ 			{ 				"internalType": "address payable", 				"name": "", 				"type": "address" 			} 		], 		"stateMutability": "view", 		"type": "function" 	}, 	{ 		"inputs": [], 		"name": "pay", 		"outputs": [], 		"stateMutability": "payable", 		"type": "function" 	}, 	{ 		"inputs": [], 		"name": "user", 		"outputs": [ 			{ 				"internalType": "address payable", 				"name": "", 				"type": "address" 			} 		], 		"stateMutability": "view", 		"type": "function" 	} ]

const addr = "0x321ee8aD61b700054bCA0279cB8d7849451FebaD"

const contract = new web3.eth.Contract(abi, addr)

// Cypto-JS...
// "fiv" & "fkey" should be stored in Environment Variable to secure them...
const fiv = 'yourivare1234567'
const fkey = '356d9abc7532ceb0945b615a622oc377'
const key = CryptoJS.enc.Utf8.parse(fkey);
const iv = CryptoJS.enc.Utf8.parse(fiv);

// Firebase...

const firebaseConfig = {
 apiKey: "AIzaSyDtoMkGumjMCckwwNrzqUgYqY3y7Bq_SPA",
 authDomain: "you-market-7cf19.firebaseapp.com",
 projectId: "you-market-7cf19",
 storageBucket: "you-market-7cf19.appspot.com",
 messagingSenderId: "374635832235",
 appId: "1:374635832235:web:0963a73aebd9108f52a8ee"
 };
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const db = firestore.collection('myData')

// Pre-Loader...

document.onreadystatechange = function() {
if (document.readyState !== "complete") {
document.querySelector(
"body").style.visibility = "hidden";
document.querySelector(
"#loader").style.visibility ="visible";
} else {
document.querySelector(
"#loader").style.display = "none";
document.querySelector(
"body").style.visibility = "visible";
}}
