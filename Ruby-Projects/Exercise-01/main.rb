# 1
puts "#1. "
array = [1,2,3,4,5,6,7,8,9,10]
array.each {|x| puts x}

# 2
puts "#2. "
h = {a:1, b:2, c:3, d:4}
puts h[:b]
puts h.merge({e:5})

# 3
puts "#3. "
contact_data = [["ana@email.com", "123 Main st.", "555-123-4567"], ["avion@email.com", "404 Not Found Dr.", "123-234-3454"]]
contacts = {"Analyn Cajocson" => {}, "Avion School" => {}}
keys = [:email, :address, :phone]

contacts.each_with_index do | (_, contact), contact_index |
  keys.each_with_index do | key, key_index |
    contact[key] = contact_data[contact_index][key_index]
  end
end

contacts.to_h.each {|contact| puts contact}