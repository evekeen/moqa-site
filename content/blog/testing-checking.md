+++
categories = []
date = "2017-10-28T13:30:05+03:00"
tags = ["testing", "qa", "checking", "best", "practices", "moqa", "testrail"]
title = "testing vs checking"
banner = "img/checklist.jpg"

+++

### Save time on Checking - Do More QA

There are a lot of discussions about difference between checking and testing; checking is something we can do using tools, automated tests, but testing - more general activity, we need a human mind here. And nowadays it became more and more important to be adaptive, think generally. Test engineer should think not about one particular feature, but about integration of this feature into the product.
 
I had one project, where we worked in Waterfall model, so QA team was involved on the last stage, testing activities were mostly checking: suddenly we had no time to think about feature itself (you know, everything should be done yesterday), just checked it according to the specification. So, mostly we spent time on trying to find the right excel file to set the status. As you can imagine, customers didn’t like the product.
 
Then we analyzed if we can improve something here, we tried to understand if there are some activities we can skip or decrease. So, we spent time on tedious checking instead of doing testing and use our knowledge and creativity. I was curious where other teams spent time? I’ve asked several colleges and get following answers,ordered by popularity: documentation, communication, environment preparation, checking. Was it true for my team?

* Documentation. 
Definitely it is the first point in our list: we spend a lot of time preparing test cases, test plans, test reports. It is a tedious work, but are you sure someone even reads it? And it is extremely important to use good test management system. I know a guy, who even have a matrix with tool names and time ratio: when somebody asked to estimate testing activities, he asked back about software they used and multiply according to the matrix. He has 2 for excel :) . So, be careful with choosing the right tool, do not waste your time on configurations and pointless clicking

* Analysis & communication. 
This is the most important part, especially in Agile teams: everybody should understand what and why we do, there is no comprehensive documentation. Since we worked in Waterfall, we had a lot of specs, but part of it was outdated. We wasn’t involved in planning and all questions were really “too late”

* Checking features and regression. 
Here we spent time not just on clicking buttons, but analysing and bugs localization. This part often can be partly automated on different test levels. For manual tests we can use checklists, so test engineer will have some freedom in decision, concentrate on product, not steps. It is important here where you store your tests, if it is easy to define a test plan, run tests,  and check progress. Our team spent too much time here, just because we had no test management system it was not easy to run tests, to create reports and it was a nightmare for managers to understand the progress.

* Something always goes wrong, especially with our “test karma”: fix missed in the build, CI moved to another server or something else :) We spent time on solving problems, we should admit it.

I would like to share some more tips with you:

* Don't add detailed instructions if feature is not done yet. Use questions and checklists instead, save time on updating docs. It was one of the most time-consuming things in our project: we tried to create great tests from starts, but it is impossible.

* Write down all comments, right into your tests and tasks. Don’t miss details shared by your developers with you! All information can be useful: people can just told you something but forgot to update doc

* Use tools, it helps you to do some checks faster, save time for real testing instead of checking. There are a lot of different services and plugins available, for example: XSS Me firefox plugin for checking security, [WebPageTest](https://www.webpagetest.org) for performance 

* Choose the right tool for test management. Don’t waste your time on merging google docs or Excel files. [Test Rail](http://www.testrail.net) is a good example, it is the most powerful and easy-to-use tool for your tests, helps you to store all tests in one place, share your progress with other during integration with issue tracking systems

* Decrease time you spent on test execution. It is important, it should be easy to run your tests, even on the lab. 

* Testing status should be transparent for everybody in the team. So, your managers will not bother you with questions.

Bunch of these problems can be easily resolved with **MoQA**, brand new, fast, simple and beautiful mobile solution for running your tests. It is available for **Android** and **iOs** and will help you to speed up testing. 

3 things MoQA can help you with:

* Test everywhere. In the hardware lab, on your developer computer, even during the boring meeting :)
* Test faster. Just swipe it! Test status will be set immediately
* Always know the real progress. Check it at any time!

So, spent less time on checking and tedious work, more time on real QA with **Test Rail** and **MoQA**!