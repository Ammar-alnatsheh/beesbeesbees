# beesbeesbees
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.

Pseudoclassical bees - get ready to learn some science
Bees (the most noble of insects) progress through specific developmental stages over the course of their lifetimes. Each phase has specific traits and behaviors associated with it that are unique to that lifestage. In this repo, you will create bees of many lifestages while practicing the pseudoclassical instantiation pattern, inheritance, and subclassing.

Class Structure

├── Grub
│   └── Bee
│       ├── HoneyMakerBee
│       └── ForagerBee
│          └── RetiredForagerBee


As you can see in the diagram above, all bees start out as a Grub, grow into a Bee and are then assigned its specific jobs and tasks among its other charactersitics. This means that characteristics are inherited from the classes above (although they can be modified on the current class level).
