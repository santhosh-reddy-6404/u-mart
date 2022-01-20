//SPDX-License-Identifier:MIT
pragma solidity ^0.8.*;

contract myContract {

address addr = 0xbB132b897A8868829C428C386dBb516a315bb2AD;
address payable public owner = payable(addr);

function balance() public view returns(uint){
return address(this).balance;
}

address payable public user = payable(msg.sender);
uint public amount = msg.value;
function pay() payable public {
user.transfer(amount);
}

function confirm( uint price) external {
owner.transfer(price);
}

function cancel(uint price) external {
user.transfer(price);
}

}
