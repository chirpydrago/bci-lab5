// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol";

contract MyToken1 is ERC20PresetMinterPauser {
    constructor() public ERC20PresetMinterPauser("CTK Token", "CTK") {}
}

contract MyToken2 is ERC20PresetMinterPauser {
    constructor() public ERC20PresetMinterPauser("MTK Token", "MTK") {}
}