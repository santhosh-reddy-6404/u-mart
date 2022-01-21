**U Mart - Blockchain Ecommerce (Made with ❤  by  Santhosh  Reddy)**<br/>
preview: https://u-mart.netlify.app/

**Hey guys!**
This is Santhosh Reddy a 17 year old web dev and a blockchain dev.
I made a real-time Ecommerce web app as my project made with combining my web and blockchain development skills and this is my first real-time as well as big project. This project has taken around 52days to complete as an individual.

Follow me on twitter : https://twitter.com/k_santosh2005

If you like my work please don't forget to give a ⭐ . It's free of cost...

**Introduction**

This project is a real-time single vendor ecommerce web app and also tagged as PWA as well as Dapp as it is built on ethereum blockchain network (ropsten - testnet).<br/>

All the packages required for the project are installed through CDNs in the index. html files and never used CLI or npm to build this project.

The Front-end of the app is built with React.JS library, a smart contract with solidity and deployed with remix ide and Web3.JS to interact with the smart contract.

The app is styled with basic css and the app is completely responsive.

Most of the app data like products, orders, admin data, user wishlist, reviews are stored in IPFS and the data is pinned automatically and the core function of supply chain management is done through smart contracts. Hence, this is a decentralized app (Dapp). The cart data as well as order inputs data of user is stored in localStorage.

This project uses Moralis.io for user authentication, ipfs gateway and ethereum rpc node. All the hashes of data stored in ipfs are stored in firebase firestore.

However, storing the hashes of the data stored in IPFS in the blockchain through smart contracts is the best and secure way in terms of privacy. Even though I'm capable of implementing that (as i also created a smart contract for payments on ethereum blockchain), I didn't do that in this project. This is because I made this project to showcase my skills which also includes hadling a noSQL database like Firebase.

All the components of the app are kept in index. html files itself under script tags (type="module")

The main components of the project are :<br/>
1. Front-end User App<br/>
2. Admin Panel, for store vendor<br/>
3. Supply Chain management, payment and shipping - smart contract<br/>

**1. Front-end User App**

This is the part of the app where users can interact with. This includes - Home, search, cart, shop & category filter, products page along with reviews, about page, profile with wishlist & order history and finally the Checkout.

The user can login to the app using his/her metamask wallet.

**2. Admin Panel, for store vendor**

An admin panel is a place where the store vendor can manage his online store.

The main components of the admin panel are:<br/>
1. A small dashboard banner showing total number of products, inventory worth, total revenue and number of unfulfilled orders.<br/>
2. Admin data to update his store data which is to be shown to users in about page.<br/>
3. Inventory management (CRUD operations on products data)<br/>
4. Orders data and management.<br/>

The admin has access only to the order data of users and nothing else.

**3. Supply Chain management, payment and shipping - smart contract**

As we know, Ecommerce is a part of supply chain management of industrial manufactured products and the Supply Chain industry is going to be the main profitable industry from blockchain technology.

In Ecommerce sector blockchain can remove human errors by middle-men and enhance the security of finance and other data.

In this project, a simple smartContract(/admin/contract.sol) was build with 3 main functions, 1.Pay() and then 2.Confirm() or 3.Cancel()

When a user places an order, the order data is added to ipfs and along with the order data a secret pin is generated and added to ipfs. The order becomes successful only when the user confirms the Pay() transaction (ethers flow from the wallet to the smart contract) in the metamask wallet.

The vendor recieves the order in the andmin panel and he sets to ship the order by tagging the secret pin of the order to the product and updates the order status to "shipped".

The delivery boys arrives to the user's address and hands over the order to the user only after telling the secret pin to the delivery boy. The user can see the secret pin in his order history only afetr performing the Confirm() transaction (ethers flows from smart contract to the admin's wallet).

The user can cancel his order any time before receiving the order by performing the Cancel() transaction(ethers flows back from the smart contract to the user's wallet). The refund function is not created yet!

**The End!**

Thanks for reading. Please checkout my project and don't forget to give it a ⭐ if you like it.

Bye guys 🙂...!
