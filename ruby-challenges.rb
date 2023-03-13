# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# -----Pseudo Code----
# INPUT: number
# OUTPUT: string stating whether or not the number is odd or even
# create a function call odd_or_even that takes in a number
# create a conditional state that if the modulo 2 of the number == zero then we return the its even
# else we return that its false

def odd_or_even num 
    if num % 2 == 0
        "#{num} is an even number"
    else 
        "#{num} is an odd number"
    end
end

p odd_or_even (num1)
p odd_or_even (num2)
p odd_or_even (num3)
# OUTPUT---->
# "7 is an odd number"
# "42 is an even number"
# "221 is an odd number"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# -----PSEUDO CODE------
# INPUT: string
# OUTPUT: string with removed vowels
# create a function called no_vowels that takes in a string
# us the built in method .delete "aeiou" that will remove all those given characters within in the stirng that the built in method <delete> was invoked on.
# return the string with the removed vowels.

def no_vowels string
    string.delete "aeiou"
end

p no_vowels(beatles_album1)
p no_vowels(beatles_album2)
p no_vowels(beatles_album3)
# OUTPUT---->
# "Rbbr Sl"
# "Sgt Pppr"
# "Abby Rd"


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# I wanted to keep this method, which was my intial thougt on how to do this problem (that doesnt work).
# when using reverse it is case sensitive so this method does not work for our test variables becuase 
# "Racecar" and "Rotator" are palindrome but return that they werent. To get around this problem
#  I needed to use the <casecmp()> method that is used to compare two string but ignoring the case
#  it returns a 0 if the strings are equal and a non-zero value if they are not equal.

# -----The method that doesnt work using double equal operator string.reverse----
# def palindrome string
#     if string == string.reverse
#         "#{string} is a palindrome"
#     else
#         "#{string} is not a palindrome"
#     end
# end

# -----Pseudo Code------
# INPUT: string
# OUTPUT: string
# create a functon called palindrome that takes in a string
# craete a conditional statement that if the string.casecmp is equal to the string.reverse, return that its a palindrome
# else return that its not a palindrome

def palindrome string
    if string.casecmp(string.reverse) == 0
        "#{string} is a palindrome"
    else
        "#{string} is not a palindrome"
    end
end

p palindrome(palindrome_tester1)
p palindrome(palindrome_tester2)
p palindrome(palindrome_tester3)
# OUTPUT----->
# "Racecar is a palindrome"
# "LEARN is not a palindrome"
# "Rotator is a palindrome"