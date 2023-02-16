# Redux Starter

[Redux Tutorial - Learn Redux from Scratch
](https://www.youtube.com/watch?v=poQXNp9ItL4&t=3476s)

## Definitions

- Store: Object that contains state. Immutable.
- Action: Plain JavaScript object that represents what just happened. Think of it as an "event".
- Reducer: Updates slices. Think of it as an event processer. (_Note: Shoudn't be compared to event handlers as they are mutable_)
- Slices: Part of a store. Each reducer is responsible for updating a slice.

## Steps

1. Design the store

```
{
    [
        id: 0,
        desription: "Lorem Ipsum",
        resolved: false,
    ]
}
```

2. Define the actions

- Add a Bug
- Mark as Resolved
- Delete a Bug

```
{
    type: "ADD_BUG", // Needed by Redux; Any other type; Advisable to be descriptive for logs/debugging;
    description: "..."
}
```

Flux structure

```
{
    type: "ADD_BUG",
    payload: {
        // Contains minimum information needed for the action
        id: 1,
        description: "...",
    }
}
```

3. Create a reducer
4. Set up the store
