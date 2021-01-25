# Liskov Substitution Principle

class Employee
    def initialize(full_name, employee_id)
        @full_name = full_name
        @employee_id = employee_id
    end

    def print_information
        puts "Name: #{@name} \n Employee ID: #{@employee_id}"
    end
end

class Bartender < Employee
    def initialize(full_name, employee_id)
        super(full_name, employee_id)
        @occupation = 'Bartender'
    end

    def print_information
        puts "Name: #{@full_name} \nEmployee ID: #{@employee_id} \nOccupation: #{@occupation}"
    end
end

person = Bartender.new("Eque", 12345).print_information