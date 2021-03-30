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

# Hotfix to avoid using "eventmachine (1.2.7-x64-mingw32)" which makes errors on Windows.
gem 'eventmachine', '1.2.7', git: 'https://github.com/eventmachine/eventmachine.git', tag: 'v1.2.7'
