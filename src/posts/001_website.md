---
title: The journey starts
description: Description of the steps I have been through until now.
date: 2020-04-05
---

Here I am, talking about my first project in the __truschkin.dev__ era, which is this website itself. To make this website work, I have already done a couple things I have never done before. Let's investigate them step by step:

#### 0. Buying a domain
A friend of mine suggested me to look out for domains on [namecheap.com](https://www.namecheap.com/). I went for it at bought the domain you are currently visiting. Finally I could call myself a domain owner 🎉.

#### 1. Creating a repo
Since I was already familiar how to use git and github, this step went seamlessly. I created a [repo on github](https://github.com/paultrue/truschkin.dev), checked it out on my machine. I added a basic `index.html` + `.gitignore` to set a base for this project.

#### 2. Hosting website
There are many solutions to host a website. I went with [netlify](https://www.netlify.com/), since almost every coworker mentioned at least once how much they love it. It was my first time to host a website completely by myself, which made me really curious to see how it works out using netlify. 

It turns out that netlify is pretty easy to use. All I had to do is:
1. add domain
2. add site and connect it to my github-project
3. point my domain's nameservers to netlify in their DNS-settings

So I went back to namecheap.com and pasted every netlify nameserver in the `Custom DNS` section in the settings of my domain. DONE! Some magic made my domain, netlify and github talk to each other.
Now, like most of my coworkers, I am in love with netlify as well 🤷‍♂️.

#### 3. Choosing a framework for this project
Finding a base for the website was a though decision. Because I perfectly know that I usually fall into a rabbithole exploring many possible solutions. It had to be simple to setup and easy to use. Something lightweight and well supported by the community. No backend, no database. A static site generator was the obvious choice for me.
Some years ago I played around with [hexo](https://hexo.io/) and really enjoyed it. So I did some research on how the topic of static site generator has evolved. After reading through a couple resources [this comparison](https://snipcart.com/blog/choose-best-static-site-generator) finally made me pick [11ty](https://www.11ty.dev/). It has great documentation, helpful tutorials for beginners and offers a bunch of ready to use starter projects. I went for the [base-blog-project](https://github.com/11ty/eleventy-base-blog). After removing some boilerplate I was ready to write my first article.

#### 4. Adjusting build settings in netlify
11ty generates static HTML-files out of all markdown files. All you have to do is running the command `eleventy` in the commandline. It will generate all files into the directory `/_site`. The last step I had to configurate was to tell netlify to execute that command and point it to the target directory. 

![netlify build setting](/assets/img/netlify_build.png "netlify build setting")

#### What's next?
Now I can start to apply own styling, adjust strucutre of the website, add favicon, ... and of course start with other side projects I have on my mind 👨‍💻. 

