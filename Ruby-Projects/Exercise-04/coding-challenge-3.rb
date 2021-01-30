# Count of positives / sum of negatives
# Given an array of integers.
# Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
# If the input array is empty or null, return an empty array.
# Example
# For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
array_empty = []
def count_positives_and_sum_negatives(input)
    if (input == nil) or (input.length < 1)
        return []
    end 
    positive = []
    sum = 0
    for number in input
        if (number > 0)
            positive << number
        else
            sum += number
        end
    end 
    puts [positive.length, sum]
end

count_positives_and_sum_negatives(array)
count_positives_and_sum_negatives(array_empty)


# def count_postisives_sum_negatives(list)
#     return [] if list.empty?

#     positive = list.select{ |s| s > 0 }
#     negative = list.select{ |s| s < 0 }

#     [ positive.length, negative.sum ]
# end