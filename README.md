# PEGASUSX : NEXT GEN VOTING SYSTEM
## INTRODUCTION
PegasusX is a web-app voting system prototype empowered by blockchain technology.
But what is a blockchain? And why blockchain?

Block chain has been the talk of the town in recent years. and it’s reasonable.
Block chain is one of the new technologies along with AI, that was born in the 21st century. And, eventually, people got obsessed with it because of its incredulous data security features. Ever since then, Block chain has become the need of the hour.
Block chain is seen as a modern-day tamper-proof data structure. Think of Block chain as a linked list where each node/block contains hash of previous node (except the first block), transaction id, block id, and etc. Now, answering the question, why block chain? Here, is the thing, unlike linked list, in block chain we can’t delete a block like we can delete a node in linked list. Once, it’s inserted it’s always there; nothing can change it. This special property is called immutability, and this is why it’s tamper-proof.
So, that should be pretty much enough to hint how block chain can revolutionize voting systems.

## PROBLEM STATEMENT
In our day-to-day life we come across the EVM(Electronic Voting Machine) for voting our candidates/party. Through all these years we are made accustomed to it. At first sight it might look successful but if only you know how it works you will realize how easy it is to exploit these machines/systems.

Our current day-to-day voting systems are prone to man-in-the-middle attack. Since the data/vote that is stored can be manipulated, it makes it exploitable at the backend. There are many such cases, one such famous case is the controversial “2016 presidential election in USA”, where the Russians managed to hack the voting systems and were in a position to alter or delete voter registration data.

According to the Senate Intelligence Committee’s report,
Russians, ”were able to gain access to restricted elements of election infrastructure and “were in a position to, at a minimum, alter or delete voter data.”

Now, 2016 U.S presidential election was rigged by the Russian in many other ways too.  But, this was one of the most critical one. This problem was due to the mutable nature of the backend database of the voting system allowing manipulation of data.

So, now imagine if the backend was immutable allowing no manipulation at all by anyone. That’s where blockchain comes into picture. By using blockchain, we store the votes in the blockchain network where once a user votes his candidate his vote is stored permanently in the blockchain. By this way, we will be able to perfectly make the backend unalterable.
