# Activity 1: 
# We have a Confection class representing baked desserts. Your job is to create a new subclass of Confection, named Cupcake and Banana Cake. 
# Cupcakes and Banana Cakes need to be baked just like other confections, but cupcakes also need to be frosted afterward. 
# Write a prepare method for your Cupcake and Banana Cake class that prints “Baking at 350 degrees for 25 minutes.“, 
# and then prints “Applying frosting” for Cupcake only.

class Confection
	def bake
		puts "Baking at 350 degrees for 25 minutes."
	end
end

module Frosted
	def frosting
		puts "Applying Frosting"
	end
end

class Cupcake < Confection
	include Frosted
end

class BananaCake < Confection; end

confection = Confection.new
confection.bake()

cupcake = Cupcake.new
cupcake.bake()
cupcake.frosting()

banana_cake = BananaCake.new
banana_cake.bake()

# Activity 2:

module AdminPermisson
    def edit_users_profile
    	puts "Admin updated all users profile"
    end
end
  
module BuyerPermission
    def buy
    	puts "Buyer has bought an item"
	end
end
  
class User
	attr_writer :password
    def initialize(username, password, ip_address)
		@username = username
		@password = password
		@ip_address = ip_address
    end
	
	def change_password(new_password)
		@password = new_password
	end
    protected
	def login
    	puts "User logged in. IP address: #{@ip_address}"
    end
end
  
  
class Admin < User
	include AdminPermisson
	def admin_login
		login
	end
end
  
class Buyer < User
	include BuyerPermission
	def buyer_login
		login
	end
end
  
## execute
  
my_admin = Admin.new('avionuser', 'password', '127.0.0.1')
my_admin.admin_login
my_admin.edit_users_profile
my_admin.change_password('new_password')

buyer = Buyer.new('juan', 'password', '127.0.0.1')
buyer.buyer_login
buyer.buy
buyer.change_password('new_password')
