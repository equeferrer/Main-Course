# A square of squares
# You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
# However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
# Task
# Given an integral number, determine if it's a square number:
# In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself
# Examples

def is_square(int)
    sqrt = int**0.5

    if (int >= 0) and (sqrt % 1 == 0)
        return true
    else 
        return false
    end
end

puts is_square(-1)
puts is_square(0)
puts is_square(3)
puts is_square(4)
puts is_square(25)
puts is_square(26)

# 1 => false
# 0 => true
# 3 => false
# 4 => true
# 25 => true
# 26 => false

# Activity/Coding Challenge 
# #1.
arr = [1,3,5,7,8,11]
number = 3

if arr.include?(number)
    puts true
end

# #.2
num = gets.chomp()
if (num.to_i >= 0) and (num.to_i <= 50)
    puts "0-50"
elsif (num.to_i >= 50) and (num.to_i <= 100)
    puts "0-100"
elsif (num.to_i > 100)
    puts 'over 100'
else 
    puts "not a valid number"
end

# #.3
stop = "STOP"
word = ""
while word != stop
    word = gets.chomp() 
    puts word
end

# #.4
array = [6,3,1,8,4,2,10,65,102]
new_array =[]
for num in array
    if (num % 2 == 0)
        new_array << num
    end
end

print new_array