(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{392:function(e,t,o){"use strict";o.r(t);var r=o(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"index"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#Trusting-is-Good-Not-Trusting-is-Better"}},[e._v("Trusting is Good Not Trusting is Better")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Monitoring-the-Behavior"}},[e._v("Monitoring the Behavior")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Monitoring-the-Usage"}},[e._v("Monitoring the Usage")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Conclusions"}},[e._v("Conclusions")])])]),e._v(" "),o("h2",{attrs:{id:"trusting-is-good-not-trusting-is-better"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#trusting-is-good-not-trusting-is-better"}},[e._v("#")]),e._v(" Trusting is Good Not Trusting is Better")]),e._v(" "),o("p",[e._v("Application monitoring is a "),o("em",[e._v("key")]),e._v(" part of running software in production.")]),e._v(" "),o("p",[e._v("Without it, the only way of finding an issue is through sheer luck or because a client has reported it.")]),e._v(" "),o("p",[e._v("Both of which are less than ideal, to say the least!")]),e._v(" "),o("p",[o("strong",[e._v("You wouldn't deploy an application without monitoring, so why do it for Machine Learning models?")])]),e._v(" "),o("p",[e._v("So let's Start!")]),e._v(" "),o("p",[e._v("The first resource you should go through is the following:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://christophergs.com/machine%20learning/2020/03/14/how-to-monitor-machine-learning-models/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Monitor Machine Learning Models"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("It's a very detailed and comprehensive blog post and it addresses these topics:")]),e._v(" "),o("ul",[o("li",[e._v("What makes ML systems monitoring hard?")]),e._v(" "),o("li",[e._v("How can we monitor the usage and behavior of the model?")]),e._v(" "),o("li",[e._v("What are the key metrics to track and alert on?")]),e._v(" "),o("li",[e._v("What are the key principles for monitoring the ML system?")])]),e._v(" "),o("p",[e._v("Once you are done with the previous blog post, you can refer to the related chapter of the book "),o("a",{attrs:{href:"http://www.mlebook.com/wiki/doku.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("Machine Learning Engineering"),o("OutboundLink")],1),e._v(" for a more detailed guide (strongly recommended buy, but you can read it for free online).")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.dropbox.com/s/nj23m5myng9gram/Chapter8.pdf?dl=0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chapter 8 - Model Serving and Monitoring"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("See also:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://towardsdatascience.com/there-are-two-very-different-ways-to-deploy-ml-models-heres-both-ce2e97c7b9b1",target:"_blank",rel:"noopener noreferrer"}},[e._v("There are two very different ways to deploy ML models, here’s both"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("With these two resources, you should understand broadly the reasons and challenges of monitoring the Machine Learning models in production, and you should have reasonable strategies to tackle them.")]),e._v(" "),o("p",[e._v("As you know, the two main challenges regarding the model monitoring are:")]),e._v(" "),o("ul",[o("li",[e._v("How does the system behave?")]),e._v(" "),o("li",[e._v("How is the system used?")])]),e._v(" "),o("p",[e._v("Let's see some specific resources for these two challenges.")]),e._v(" "),o("h2",{attrs:{id:"monitoring-the-behavior"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-the-behavior"}},[e._v("#")]),e._v(" Monitoring the Behavior")]),e._v(" "),o("p",[e._v("When monitoring the behavior of the ML model in production, you should consider many aspects:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Setting a baseline:")]),e._v('\nA good idea is to have a baseline model before we start monitoring or measuring. Of course, if we are starting monitoring for the first time then that is our baseline.\nAfter establishing the baseline model, you can keep that static and make all comparisons and references with regards to this baseline, allowing you to ask the question: "How has the system been behaving since [important milestone/change]?"')]),e._v(" "),o("p",[e._v("See:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://datascience.stackexchange.com/questions/30912/what-does-baseline-mean-in-the-context-of-machine-learning",target:"_blank",rel:"noopener noreferrer"}},[e._v("What does “baseline” mean in the context of machine learning?"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://machinelearningmastery.com/how-to-get-baseline-results-and-why-they-matter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How To Get Baseline Results And Why They Matter"),o("OutboundLink")],1)])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Data in:")])]),e._v(" "),o("ul",[o("li",[e._v("Monitor whether the data you're processing looks like the data you trained on. ("),o("a",{attrs:{href:"https://www.cmswire.com/digital-experience/data-drift-what-it-is-and-how-to-avoid-it/",target:"_blank",rel:"noopener noreferrer"}},[e._v("data drift challenge"),o("OutboundLink")],1),e._v(') E.g., use simple (comparatively interpretable) distributional models to try to track whether data looks "sufficiently" similar.')])]),e._v(" "),o("p",[e._v("See:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://towardsdatascience.com/calculate-similarity-the-most-relevant-metrics-in-a-nutshell-9a43564f533e",target:"_blank",rel:"noopener noreferrer"}},[e._v("Calculate Similarity — the most relevant Metrics in a Nutshell"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.researchgate.net/post/How_to_measure_similarity_or_dissimilarity_between_two_data_set",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to measure similarity or dissimilarity between two data set?"),o("OutboundLink")],1)])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Addressing data drift over time:")])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Is your data distribution non-stationary? I.e. are you expecting your model to degrade due to the data changing over time?")])]),e._v(" "),o("li",[o("p",[e._v("If so you can do anomaly detection on the stream and track the fractions of anomalous data points over time.")])]),e._v(" "),o("li",[o("p",[e._v("You can also find out if the distribution of the live-data or evaluation data matches that of the training set (or even the held-out test/evaluation set), for example with the "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Smirnov_test",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kolmogorov-Smirnov"),o("OutboundLink")],1),e._v(" test.")])])]),e._v(" "),o("p",[e._v("See:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://machinelearningmastery.com/gentle-introduction-concept-drift-machine-learning/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Gentle Introduction to Concept Drift in Machine Learning"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://dl.acm.org/doi/10.1145/3325061.3325063",target:"_blank",rel:"noopener noreferrer"}},[e._v("Addressing feature drift in data streams using iterative subset selection"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/EricSchles/drifter_ml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Drifter_ML - A machine learning testing framework for sklearn and pandas"),o("OutboundLink")],1)])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Runtime Performance:")]),e._v("\nWhen running the inference part of your models, you should consider the specific requirements of the application at hand. Some of them could require faster inference, others could serve better if the accuracy is high, so maybe you can average the predictions of several models (ensemble methods), sacrificing the speed of the computation.")]),e._v(" "),o("p",[e._v("Consider both runtime and model-specific performances:")]),e._v(" "),o("ul",[o("li",[e._v("Platform performance\n"),o("ul",[o("li",[e._v("Hardware specific")]),e._v(" "),o("li",[e._v("Environment-specific (OS or software installation, or configuration, Cloud provider)")])])]),e._v(" "),o("li",[e._v("Model-specific performance\n"),o("ul",[o("li",[e._v("Input data specific")]),e._v(" "),o("li",[e._v("Model algorithm-type specific (model built with Scikitlearn versus Pytorch v/s TF)")])])])]),e._v(" "),o("p",[e._v("See:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.tensorflow.org/tfx/serving/performance",target:"_blank",rel:"noopener noreferrer"}},[e._v("TensorFlow Performance Guide"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.reddit.com/r/MachineLearning/comments/ezpl89/d_is_there_are_a_way_to_speed_up_the_inference/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Is there are a way to speed up the inference time on CPU?"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.reddit.com/r/MachineLearning/comments/fd9cz0/d_ways_to_significantly_increase_inference_speed/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ways to significantly increase inference speed for deployment?"),o("OutboundLink")],1)])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Data out:")])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Distribution of predictions by the label. If you see this shifting a lot, another flag that inference data is shifting, which could be a point of concern.")])]),e._v(" "),o("li",[o("p",[e._v("Distribution of predictions by confidence/probability. There is a pretty rich (& ongoing) field of research here, but, as a starter, I'd also expect the distribution of raw probabilities (logits) to look similar.")])]),e._v(" "),o("li",[o("p",[e._v("As a corollary, looking at overall change in the confidence of outputs. E.g., a drop in confidence values is possibly a concerning sign. (Of course, vanilla NNs are also prone to be highly overconfident on new/OOD data, so you need to be cautious; if this is really critical, could look at different NN variants that generate better confidence assessments.)")])]),e._v(" "),o("li",[o("p",[e._v("Consider whether training a model w/ out-of-domain detector (OOD) makes sense or not.")])]),e._v(" "),o("li",[o("p",[e._v("It's also a sign that when we see such changes that our last test/evaluation dataset integrity is failing. You should update the test/evaluation datasets from production data and retrain the model, either fully or incrementally.")])])]),e._v(" "),o("p",[e._v("See:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://stats.stackexchange.com/questions/247551/how-to-determine-the-confidence-of-a-neural-network-prediction",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to determine the confidence of a neural network prediction?"),o("OutboundLink")],1)])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Human evaluation:")])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Not really going to be avoidable, but you can use a lot of the above to narrow down what people look at. Have people look at the examples which are most alarming, based on the checks you have in place. Over time, we can better calibrate what alerts are of concern.")])]),e._v(" "),o("li",[o("p",[e._v("A related option is to use a calibrated model of confidence/estimated error rate to inform what people should look at. If you pick up the lowest 1% confidence and the internal estimated error rate is 5%, then if you explore that 1% and see > 5% error rate, that could be a concern.")])])]),e._v(" "),o("p",[e._v("See:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.aclweb.org/anthology/N18-1097.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Comparing Automatic and Human Evaluation of Local Explanations for Text Classification"),o("OutboundLink")],1)])])])]),e._v(" "),o("h2",{attrs:{id:"monitoring-the-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-the-usage"}},[e._v("#")]),e._v(" Monitoring the Usage")]),e._v(" "),o("p",[e._v("If monitoring the behavior of the model can be technically hard, you should also be sure that your users are leveraging the model in the correct way.")]),e._v(" "),o("p",[e._v('With "users" we can refer to '),o("em",[e._v("everything that consumes the output of the ML model")]),e._v(", it can be a system, a human, or an ensemble of systems and humans.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("If you're serving your model through an API (recommended way), you can refer to the API monitoring best practices in general (not specific for Machine Learning).")])]),e._v(" "),o("p",[e._v("See:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://stackoverflow.com/questions/28760946/whats-the-best-way-to-monitor-your-rest-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("What's the best way to monitor your REST API?"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://codeascraft.com/2011/02/15/measure-anything-measure-everything/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Measure Anything, Measure Everything"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("The major issue you can encounter when dealing with people is that they choose to not use the ML model.")]),e._v(" "),o("p",[e._v("This can happen for a variety of reasons, maybe they don't have "),o("em",[e._v("confidence enough")]),e._v(" in the system, or they don't understand "),o("em",[e._v("how to")]),e._v(" use it.")]),e._v(" "),o("p",[e._v("Take a look at this awesome guide from Google's engineers:")]),e._v(" "),o("blockquote",[o("p",[e._v("The People + AI Guidebook was written to help user experience (UX) professionals and product managers follow a human-centered approach to AI.")])]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://pair.withgoogle.com/guidebook",target:"_blank",rel:"noopener noreferrer"}},[e._v("People + AI Guidebook"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("This detailed resources can get you started about the following topics:")]),e._v(" "),o("ul",[o("li",[e._v("User Needs + Defining Success")]),e._v(" "),o("li",[e._v("Data Collection + Evaluation")]),e._v(" "),o("li",[e._v("Mental Models")]),e._v(" "),o("li",[e._v("Explainability + Trust")]),e._v(" "),o("li",[e._v("Feedback + Control")]),e._v(" "),o("li",[e._v("Errors + Graceful Failure")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("General Tips")]),e._v(" "),o("ul",[o("li",[e._v("None of the above techniques is a silver bullet")]),e._v(" "),o("li",[e._v("Use only those things that work for you and are applicable in your use-cases")]),e._v(" "),o("li",[e._v("Don't literary follow any of the ideas, try them out and see how they work for you")])])]),e._v(" "),o("h2",{attrs:{id:"conclusions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),o("p",[e._v("After walking through the resources listed here, you should be comfortable with the challenges and caveats of monitoring your Machine Learning model in production.")]),e._v(" "),o("p",[e._v("As you've seen, there are both technical challenges (data drift, input data check, output data check) and "),o("em",[e._v('"human-related"')]),e._v(" challenges. In particular, Google's People + AI Guidebook will show you most of the human-related ones.")]),e._v(" "),o("p",[e._v("In the next section, "),o("strong",[e._v("Now Go Build")]),e._v(", we'll give you a list of tips, best practices, and suggestions about "),o("em",[e._v("how to put in practice")]),e._v(" everything you've learned in the Purgatorio!")])])}),[],!1,null,null,null);t.default=n.exports}}]);