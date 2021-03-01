# Your job is to write a function which increments a string, to create a new string. 
# If the string already ends with a number, the number should be incremented by 1. 
# If the string does not end with a number. The number 1 should be appended to the new string. 
# Example: 
# foo -> foo1 
# foobar23 -> foobar24 
# foo0042 -> foo0043 
# foo9 -> foo10 
# foo099 -> foo100 
# Note: If the number has leading zeros the amount of digits should be considered.

# def string_incrementer(string)
#   last_character = string.slice(-1,1)
#   non_zero_numbers = [1,2,3,4,5,6,7,8,9]
#   if (last_character.include?(non_zero_numbers))
#     new_string.succ
#   elsif (last_character.is)
#     return string
#   end
# end
# \d: any digit; $:	End of line, 
# def increment_string(input)
#   input.sub(/\d*$/) { |n| n.empty? ? 1 : n.succ }
# end

def increment_string(string)
  num_str = string.scan(/\d+$/).first.to_s
  if string.match(/\d$/)
    return string.gsub(num_str, num_str.succ)
  elsif num_str.empty?
    return string + "1"
  end
end

# def increment_string(input)
#   get_num = input.match(/\d+$/)
#   get_string = get_num.nil? ? input : input.delete(get_num.to_s)
#   num = get_num.nil? ? 1 : Float(get_num.to_s) + 1 

#   num_length = get_num.to_s.length
#   convert_num = "%0#{num_length}d" % num

#   "#{get_string.to_s}#{convert_num}"

# end

# puts string_incrementer("foo") # -> foo1 
# puts string_incrementer("foobar23") # -> foobar24 
# puts string_incrementer("foo0042") # -> foo0043 
# puts string_incrementer("foo9") # -> foo10 
# puts string_incrementer("foo099") # -> foo100 

puts increment_string("foo") # -> foo1 
puts increment_string("foobar23") # -> foobar24 
puts increment_string("foo0042") # -> foo0043 
puts increment_string("foo9") # -> foo10 
puts increment_string("foo099") # -> foo100 