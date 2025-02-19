// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HoangVuToken is ERC20, Ownable {
	constructor(
		address initialOwner
	) ERC20("HoangVuToken", "HVT") Ownable(initialOwner) {
		_mint(initialOwner, 1000000000 * 10 ** decimals());
	}
}
