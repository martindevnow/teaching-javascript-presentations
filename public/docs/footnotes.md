> ⚠️ **JavaScript is an interpreted language**. This means that the code is not "compiled" before being shipped to the consumer. The consumer needs to have a javascript runtime installed to be able to interpret (run) the code we write. All modern browsers include a JavaScript runtime for this purpose, as well there are JS runtimes for servers.

> ⚠️ **TypeScript typing only prevents errors that can be identified at "transpilation" time**. TypeScript is a superset of JavaScript and (currently) is not interpreted by the browser JS runtime. Therefore, it is transpiled to JavaScript for the browser to be able to interpret the code.

- **Instantiation**: Think of the word `instance` or `instant`. This word references a single **\_\_** of a variable/object/class. For example, we separate the _notion of chicken_ from _a single chicken_.

"I eat chicken" is different from "I ate a chicken". The first references the concept of chicken, and the latter refers to a single "instance" of a chicken that I ate the entirety of (not recommended). An instance of a variable is similar to the latter (a single chicken) rather than the concept of "chicken"

- **Initialization**: Think of the word `initial`. This is the "first" or "starting" value. In JavaScript, not all variables _need_ to be initialized when they are created (instantiated). We might not know what value to put in a variable right away but we might want to define it before hand (due to other constraints).
