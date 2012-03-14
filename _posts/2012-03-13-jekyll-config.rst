---

layout: post

---

jekyll使用
==========

从GAE的micor-blog到SAE的WP，我以为找到了最终的站点，但jekyll来了，我又开始了迁徙。

安装jekyll
-----------

jekyll是用ruby开发的，首先需要安装ruby，安装ruby，最好用版本管理，其中之一是rvm。所以我们先安装rvm，然后，通过rvm安装ruby，然后安装jekyll这个gem包。

安装rvm
^^^^^^^^

.. code-block:: console

    $ bash -s stable < <(curl -s https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer)
    $ echo '[[ -s "$HOME/.rvm/scripts/rvm" ]] && . "$HOME/.rvm/scripts/rvm" # Load RVM function' >> ~/.bash_profile
    $ source ~/.bash_profile


安装ruby
^^^^^^^^^

.. code-block:: console

    $ rvm install 1.9.3
    $ rvm use 1.9.3

通过gem安装jekyll
^^^^^^^^^^^^^^^^^^

.. code-block:: console

    $ gem install jekyll 

部署jekyll
-----------

现在算是安装好了jekyll“编译器”，可以用来编译markdown文件，生成html文件。jekyll的要求结构部署如下：

.. code-block:: console

    $ ls -F
    _config.yml  _includes/   _layouts/    _posts/      _site/


jekyllbootstrap来快速创建：http://jekyllbootstrap.com/



`像黑客一样写博客——Jekyll入门_

__ http://www.soimort.org/tech-blog/2011/11/19/introduction-to-jekyll_zh.html


`使用Jekyll在Github上搭建博客_

__ http://taberh.me/2011/12/26/use-Jekyll-build-Blog-on-Github.html


蒋鑫介绍如何在github上建立个人主页
http://www.worldhello.net/gotgithub/03-project-hosting/050-homepage.html
