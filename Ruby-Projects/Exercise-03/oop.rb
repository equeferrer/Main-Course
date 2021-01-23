# Encapsulation, Abstraction

class Restaurant 
    def initialize(total_parties, total_tables, total_sales)
        @total_parties = total_parties
        @total_tables = total_tables
        @total_sales = total_sales
    end

    def turnover
        @total_parties / @total_tables
    end

    def ave_bill_turnover
        @total_sales / turnover
    end

end

restaurant = Restaurant.new(40,10, 400)
puts restaurant.turnover #encapsulation
puts restaurant.ave_bill_turnover #abstraction

# Polymorphism - Inheritance
class Wheel 
    def tire 
        puts "1 tire"
    end
end
   
class Car < Wheel 
    def tire 
        puts "4 tires"
    end
end
   
class Bicycle < Wheel 
    def tire 
        puts "2 tires"
    end
end
   
vehicle = Car.new
vehicle.tire() 
   
vehicle = Bicycle.new
vehicle.tire() 

# Polymorphism - Duck Typing
class Concert 
    def enter 
        puts "attendee enters"
    end
     
    def type(customer) 
      customer.type 
    end
end

class Vip
    def type
        puts "VIP section"
    end
end

class Regular
    def type
        puts "Regular section"
    end
end  

concert = Concert.new
regular = Regular.new
concert.type(regular)

vip = Vip.new
concert.type(vip)