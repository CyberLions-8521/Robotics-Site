## Contribution

This project is built on Jekyll (which requires Ruby), uses the Jekyll Documentation theme, and deployed to GitHub pages. If you're unfamiliar with all that, here's the breakdown to install dependencies:

### 1a. Install Ruby (Windows)

Download [RubyInstaller](https://rubyinstaller.org/) (get the DevKit version) and run the installer. Check to see it's installed by opening up command prompt and writing `ruby -v`. Also be sure to install MSYS2 and MINGW development toolchain. If you accidentally skip that step, run `ridk install` and select 3.

RubyGems, a package management framework, should also be installed. Check to see it's installed with the command `gem -v`. If for some reason you don't have it, download [RubyGems](https://rubygems.org/pages/download) (get the zip download) and install it.
### 1b. Install Ruby (Mac)

Ruby is installed on Mac by default. Just in case, install [homebrew](https://brew.sh/) if you don't have it yet, then run `brew install ruby`. Check to see it's installed by opening up terminal and writing `ruby -v`.

RubyGems, a package management framework, should also be installed. Check to see it's installed with the command `gem -v`. If for some reason you don't have it, download [RubyGems](https://rubygems.org/pages/download) (get the zip download) and install it.

### 2. Install Jekyll

Run `gem install jekyll bundler` in a terminal window. This will install Jekyll and Bundler.

### 3. Clone the repository

If you're using VSCode, go to the Source Control tab and press Clone Repository. Input your GitHub credentials if you haven't already and locate the repo, then clone it.

### 4. Install gem dependencies

Run `bundle install`. This will install the gems associated with the project.

### 5. Serve the website

This step is for running the website for testing. Run `bundle exec jekyll serve`. This will generate the site and serve it locally. You can access it by typing [`localhost:4000`](http://localhost:4000) into the URL bar of your browser.

### 6. Resources

To familiarize yourself with Jekyll, watch this playlist: [https://www.youtube.com/watch?v=EvYs1idcGnM&list=PLWzwUIYZpnJuT0sH4BN56P5oWTdHJiTNq](https://www.youtube.com/watch?v=EvYs1idcGnM&list=PLWzwUIYZpnJuT0sH4BN56P5oWTdHJiTNq)<br>
To familiarize yourself with this specific theme, read the following: [https://idratherbewriting.com/documentation-theme-jekyll/](https://idratherbewriting.com/documentation-theme-jekyll/)