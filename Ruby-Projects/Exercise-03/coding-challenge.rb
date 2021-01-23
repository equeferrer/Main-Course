# Find the smallest integer in the array
# Given an array of integers your solution should find the smallest integer.
# For example:
# Given [34, 15, 88, 2] your solution will return 2
# Given [34, -345, -1, 100] your solution will return 345
# You can assume, for the purpose of this challenge, that the supplied array will not be empty.

array = [34, -345, -1, 100]
array_two = [34, 15, 88, 2]

def smallest_number(array)
    smallest = array[0]

    for num in array
        if smallest > num
            smallest = num
        end
    end
    puts smallest 
end

smallest_number(array)
smallest_number(array_two)

# sample class
class Instructor
    # attr_accessor :age
    def initialize(name, company)
       @name = name
       @company = company
    end
    def hello
        puts "Hello Ruby! - #{@name}"
    end
    
end


instructor = Instructor.new("Analyn", "Avion School")
instructor.hello
# instructor.age = 20
# puts instructor.age