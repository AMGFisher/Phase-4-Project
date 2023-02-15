# puts "Seeding Users..."

# 25.times do
#   User.create(
#     first_name: Faker::Name.unique.first_name,
#     last_name: Faker::Name.last_name,
#     email: Faker::Internet.unique.email,
#     handle: Faker::FunnyName.name
#   )
# end

# puts "Seeding Posts..."

# 50.times do
#   Post.create(
#     image: Faker::LoremFlickr.image(size: "750x750", search_terms: ['person', 'nature'], match_all: true),
#     caption: Faker::GreekPhilosophers.quote,
#     likes: rand(0..100),
#     dislikes: rand(0..100),
#     user_id: rand(1..25)
#   )
# end

# puts "Seeding Comments..."

# 75.times do
#   Comment.create(
#     content: Faker::JapaneseMedia::StudioGhibli.quote,
#     post_id: rand(1..50),
#     user_id: rand(1..25)
#   )
# end

# puts "Seeding Comment_Comments..."

# 100.times do
#   CommentComment.create(
#     content: Faker::TvShows::Seinfeld.quote,
#     comment_id: rand(1..75),
#     user_id: rand(1..25)
#   )
# end

# puts "Seeding Follows"

# 100.times do
#     Follow.create!(
#         follower_id: rand(1..25),
#         following_id: rand(1..25) 
#     )
# end

puts "Updating Images"

# Post.find(1).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=1")
# Post.find(2).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=2")
# Post.find(3).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=3")
# Post.find(4).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=4")
# Post.find(5).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=5")
# Post.find(6).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=6")
# Post.find(7).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=7")
# Post.find(8).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=8")
# Post.find(9).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=9")
# Post.find(10).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=10")
# Post.find(11).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=11")
# Post.find(12).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=12")
# Post.find(13).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=13")
# Post.find(14).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=14")
# Post.find(15).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=15")
# Post.find(16).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=16")
# Post.find(17).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=17")
# Post.find(18).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=18")
# Post.find(19).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=19")
# Post.find(20).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=20")
# Post.find(21).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=21")
# Post.find(22).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=22")
# Post.find(23).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=23")
# Post.find(24).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=24")
# Post.find(25).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=25")
# Post.find(26).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=26")
# Post.find(27).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=27")
# Post.find(28).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=28")
# Post.find(29).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=29")
# Post.find(30).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=30")
# Post.find(31).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=31")
# Post.find(32).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=32")
# Post.find(33).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=33")
# Post.find(34).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=34")
# Post.find(35).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=35")
# Post.find(36).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=36")
# Post.find(37).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=37")
# Post.find(38).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=38")
# Post.find(39).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=39")
# Post.find(40).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=40")
# Post.find(41).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=41")
# Post.find(42).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=42")
# Post.find(43).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=43")
# Post.find(44).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=44")
# Post.find(45).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=45")
# Post.find(46).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=46")
# Post.find(47).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=47")
# Post.find(48).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=48")
# Post.find(49).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=49")
# Post.find(50).update!(image: "https://loremflickr.com/750/750/people,nature/all?lock=50")

Post.find(1).update!(image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg")

User.find(1).update(password: '1')
  User.find(2).update(password: '2')
  User.find(3).update(password: '3')
  User.find(4).update(password: '4')
  User.find(5).update(password: '5')
  User.find(6).update(password: '6')
  User.find(7).update(password: '7')
  User.find(8).update(password: '8')
  User.find(9).update(password: '9')
  User.find(10).update(password: '10')
  User.find(11).update(password: '11')
  User.find(12).update(password: '12')
  User.find(13).update(password: '13')
  User.find(14).update(password: '14')
  User.find(15).update(password: '15')
  User.find(16).update(password: '16')
  User.find(17).update(password: '17')
  User.find(18).update(password: '18')
  User.find(19).update(password: '19')
  User.find(20).update(password: '20')
  User.find(21).update(password: '21')
  User.find(22).update(password: '22')
  User.find(23).update(password: '23')
  User.find(24).update(password: '24')
  User.find(25).update(password: '25')


puts "Done seeding!"