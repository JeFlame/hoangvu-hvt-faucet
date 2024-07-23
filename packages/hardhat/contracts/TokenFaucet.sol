// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenFaucet {
	uint256 public amountAllowed = 10 * 10 ** 18;
	address public tokenContract;
	mapping(address => bool) public requestedAddress;

	event SendToken(address indexed Receiver, uint256 indexed Amount);

	error CannotRequestMultipleTimes();
	error FaucetEmpty();

	constructor(address _tokenContract) {
		tokenContract = _tokenContract;
	}

	function requestTokens() external {
		if (requestedAddress[msg.sender] != false) {
			revert CannotRequestMultipleTimes();
		}
		IERC20 token = IERC20(tokenContract);
		if (token.balanceOf(address(this)) < amountAllowed) {
			revert FaucetEmpty();
		}

		token.transfer(msg.sender, amountAllowed);
		requestedAddress[msg.sender] = true;

		emit SendToken(msg.sender, amountAllowed);
	}
}
