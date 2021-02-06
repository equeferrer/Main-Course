# There is an array with some numbers. All numbers are equal except for one. 
# Try to find it! 
# find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2 
# find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55 
# Note: It’s guaranteed that array contains at least 3 numbers. 
# Note: Avoid using .uniq method


def find_uniq(array)
  array.tally.find { |number, quantity| quantity == 1}.first
end


puts find_uniq([ 1, 1, 1, 2, 1, 1 ]) # == 2 
puts find_uniq([ 0, 0, 0.55, 0, 0 ]) # == 0.55 
puts find_uniq([ "a", "a", "b", "c", "c" ])