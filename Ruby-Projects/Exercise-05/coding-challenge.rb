# Keep Hydrated!
# Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. 
# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
# For example:
# time = 3 ----> litres = 1
# time = 6.7---> litres = 3
# time = 11.8--> litres = 5

def drink_water(hours)
  return (hours*0.5).to_i
end

# def drink_water(hours)
#   puts (hours.to_i*0.5).floor
# end

puts drink_water(3)
puts drink_water(6.7)
puts drink_water(11.8)
