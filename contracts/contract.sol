// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

interface ERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract TokenBalanceChecker {
    function getTokenBalance(string memory tokenContractAddress, string memory walletAddress) public view returns (uint256) {

            address tokenContract = address(uint160(uint256(keccak256(abi.encodePacked(tokenContractAddress)))));
            address wallet = address(uint160(uint256(keccak256(abi.encodePacked(walletAddress)))));
            
            ERC20 token = ERC20(tokenContract);
            uint256 balance = token.balanceOf(wallet);
            return  balance;
        

    }
}


