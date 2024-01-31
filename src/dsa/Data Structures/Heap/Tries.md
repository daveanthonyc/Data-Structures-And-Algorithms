# Tries

Visualise it like auto complete
It's like a retrieval tree

E.g 26 letterse in alphabet

If i am looking for word "cat" 

[26] -> c -> a -> t(isWord boolean) -> s (isWord boolean) 
                    -> t -> l -> e (isWord boolean)

Has words:
cat
cats
cattle

DFS if wanting to display words if typing a letter in

Then how to display words that are most common? if the node has a frequency score you can compare

Interview Questions:
- I need to make an Autocomplete OR I need some kind of cache
