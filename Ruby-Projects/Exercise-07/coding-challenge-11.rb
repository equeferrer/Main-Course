# Coding Exercise #11: Find the middle element
# You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

# The input to the function will be an array of three distinct numbers (Haskell: a tuple).
# Examples :
# gimme([2, 3, 1]) => 0

# => 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

# Another Examples :
# gimme([5, 10, 14]) => 1

# => 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

def gimme(array)
  sorted_array = array.sort
  return array.index(sorted_array[1])
end

puts gimme([5, 10, 14]) # => 1
puts gimme([2, 3, 1]) # => 0
puts gimme([10000, 10, 1000]) # => 2
puts gimme([10.10, 10.11, 10.09]) # => 0
puts gimme(['a', 'c', 'b']) # => 2
