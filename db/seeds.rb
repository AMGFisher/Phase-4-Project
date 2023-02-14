puts "Seeding Users..."

25.times do
  # create a game with random data
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.unique.email,
    handle: Faker::FunnyName.name
  )
end

puts "Seeding Posts..."

50.times do
  Post.create(
    image: Faker::LoremFlickr.image(size: "750x750", search_terms: ['person', 'nature'], match_all: true),
    caption: Faker::GreekPhilosophers.quote,
    likes: rand(0..100),
    dislikes: rand(0..100),
    user_id: rand(1..25)
  )
end

puts "Seeding Comments..."

75.times do
  Comment.create(
    content: Faker::JapaneseMedia::StudioGhibli.quote,
    post_id: rand(1..50),
    user_id: rand(1..25)
  )
end

puts "Seeding Comment_Comments..."

100.times do
  CommentComment.create(
    content: Faker::TvShows::Seinfeld.quote,
    comment_id: rand(1..75),
    user_id: rand(1..25)
  )
end

puts "Seeding Follows"

100.times do
    Follow.create!(
        follower_id: rand(1..25),
        following_id: rand(1..25) 
    )
end

puts "Done seeding!"