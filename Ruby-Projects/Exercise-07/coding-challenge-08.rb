# Coding Exercise # 8: Format a string of names like 'Bart, Lisa & Maggie'.
# Given: an array containing hashes of names Return: a string formatted as a list of names 
# separated by commas except for the last two names, which should be separated by an ampersand. 
# Examples : 
# list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) # returns 'Bart, Lisa & Maggie' 
# list([ {name: 'Bart'}, {name: 'Lisa'} ]) # returns 'Bart & Lisa' 
# list([ {name: 'Bart'} ]) # returns 'Bart' 
# list([]) # returns '' 
# Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

# def format_string(names)
#   names = names.map { |name| name[:name] }
#   final_name = names.pop
#   return final_name.to_s if names.empty?
#   "#{names.join(', ')} & #{last_name}"
# end

def format_string(names)
  result = ""
  num = names.length
  names_list = names.map { |name| name[:name] }
  final_name = names_list.pop();
  if (names.length > 1)
    return "#{names_list.join(', ')} & #{final_name}"
  elsif (names.length == 1)
    return final_name
  else
    return ""
  end
end

puts format_string([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
puts format_string([ {name: 'Bart'}, {name: 'Lisa'} ])
puts format_string([ {name: 'Bart'} ])
puts format_string([])