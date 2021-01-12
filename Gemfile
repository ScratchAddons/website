# NOTE: Do this steps when updating!
#
# 1. Remove `Gemfile.lock`.
# 2. Do `bundle install`.
# 3. Do `bundle lock --add-platform x86_64-linux`.
# 4. Do `bundle lock --add-platform ruby`.
# 5. Remove `eventmachine (1.2.7-x64-mingw32)` or similar! (or Windows can't develop it!)

source "https://rubygems.org"

gem "jekyll", "~> 4.2.0"
# gem "github-pages", group: :jekyll_plugins
group :jekyll_plugins do
  gem 'jekyll-autoprefixer'
  gem 'jekyll-minifier'
  gem 'jekyll-sitemap'
  gem 'jekyll-last-modified-at'
end
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem 'eventmachine', '~> 1.2.7', platform: :ruby
