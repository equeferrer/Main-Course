# Complete the method which accepts an array of integers, and returns one of the following:

# "yes, ascending" - if the numbers in the array are sorted in an ascending order
# "yes, descending" - if the numbers in the array are sorted in a descending order
# "no" - otherwise

# Note: You can assume the array will always be valid, and there will always be one correct answer.

def is_sorted_and_how(arr)
  if arr == arr.sort 
    return 'yes, ascending'
  elsif arr == arr.sort.reverse 
    return 'yes, descending' 
  else
    return 'no'
  end
end
# test cases:
puts is_sorted_and_how([1, 2]) # => 'yes, ascending'
puts is_sorted_and_how([15, 7, 3, -8]) # => 'yes, descending'
puts is_sorted_and_how([4, 2, 30]) # =>  'no'