pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockChain(address payable receiver, uint amount, string memory message, string memory keyword) public {

        transactionCount += 1;
        transactions.push(//burda kaldım)
        }

    function getOldTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {}

    function getTransactionCount() public view returns (uint256) {}
}
