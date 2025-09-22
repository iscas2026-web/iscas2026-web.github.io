Fifth Grand Challenge on Neural Network-based Video Coding (at ISCAS 2026)
Abstract

Recently, there is increasing interest in neural network-based (NN-based) video coding, including hybrid, end-to-end, and NN enhanced schemes. To foster the research in this emerging field and provide a benchmark, we propose this Grand Challenge (GC). In this GC, different neural network-based coding schemes will be evaluated according to their coding efficiency and innovations in methodologies. Three tracks will be evaluated, including 1) hybrid neural network-based video codec, 2) end-to-end video codec, and 3) neural network enhanced VVC encoder. In the hybrid codec track, deep network-based coding tools shall be used with traditional video coding schemes. In the end-to-end codec track, the whole video codec system shall be built primarily upon deep networks. In the neural network enhanced VVC encoder track, deep network-based encoding algorithms can be applied in a VVC encoder which generates VVC compatible bitstreams.

Participants shall express their interest to participate in this Grand Challenge following the participation instruction and are invited to submit their schemes as ISCAS papers. The papers will be regularly reviewed and, if accepted, must be presented at ISCAS 2026. The submission instructions for Grand Challenge papers will be communicated by the organizers. Please contact Dr. Yue Li (yue.li@bytedance.com) for more information.
 
Rationale

In recent years, deep learning-based image/video coding schemes have achieved remarkable progress. As two representative approaches aiming at future video codec schemes, hybrid solutions and end-to-end solutions have both been investigated extensively. Hybrid solutions adopt deep network-based coding tools to enhance traditional video coding schemes while end-to-end solutions build the whole compression scheme based on deep networks. Besides, NN-based methods are also widely studied to optimize or speed up encoders compliant to existing popular standards such as HEVC, VVC. Although great advancement has been observed, there are still numerous challenges remaining to be addressed:
•	How to exploit long-term temporal dependency in an end-to-end framework for video coding;
•	How to leverage automated machine learning-based network architecture optimization for higher coding efficiency;
•	How to perform efficient bit allocation with deep learning frameworks;
•	How to achieve a better global result in terms of rate-distortion trade-offs, for example, to take the impact of the current step on later frames into account, possibly by using reinforcement learning;
•	How to achieve better complexity-efficiency trade-offs;
•	How to train a large-scale model for video coding with a reasonable cost;
•	How to speed up a VVC encoder with less coding efficiency loss via NN-based methods or use NN-based preprocessing to enhance the VVC encoding efficiency.

In view of these challenges, several activities towards improving deep learning-based image/video coding schemes have been initiated. For example, a special section on "Learning-based Image and Video Compression" was published in TCSVT, July 2020; a special section on "Optimized Image/Video Coding Based on Deep Learning" was published in OJCAS, December 2021; and the "Challenge on Learned Image Compression (CLIC)" has been organized annually since its inception at the Conference on Computer Vision and Pattern Recognition (CVPR) in 2018 and now was moved to the Data Compression Conference (DCC) from 2024. In hopes of encouraging more innovative contributions towards the aforementioned challenges in the IEEE Circuits and Systems society, we proposed this grand challenge since 2022. It has been successfully held for four years (ISCAS 2022~ ISCAS 2025), attracting outstanding researchers all over the world. As being looked forward by many experts in this area, the grand challenge will be held again for ISCAS 2026, with the same tracks and awards.


Awards

ByteDance will sponsor the awards of this grand challenge. Awards in four tracks are expected to be presented, contingent upon sufficient participants in each category. Three top-performance awards will be granted according to the performance, for the hybrid track, the end-to-end track, and the VVC encoder-only track respectively. In addition, to foster innovation, a top-creativity award will be given to the most inspiring scheme recommended by a committee group, and it is only applicable to participants with related papers accepted by ISCAS 2026. The winner of each award (if any) will receive a $4500 USD prize.

Requirements and Evaluation

•	Training Data Set
It is recommended to use the following training data.
UVG dataset: http://ultravideo.cs.tut.fi/
CDVL dataset: https://cdvl.org/
Additional training data are also allowed to be used given that they are described in the submitted document.

•	Test Specifications
In the test, each scheme will be evaluated with multiple YUV 4:2:0 test sequences in the resolution of 1920x1080. 
There is no constraint on the reference structure. Note that the neural network must be used in the decoding process of the hybrid track and the end-to-end track, while the VVC reference software VTM will be utilized for decoding bitstreams in the NN enhanced VVC encoder-only track.

•	Evaluation Criteria
The test sequences will be released according to the timeline and the results will be evaluated with the following criteria:
1.	The decoded sequences will be evaluated in the 4:2:0 color format.
2.	PSNR (6*PSNRY + PSNRU + PSNRV)/8 will be used to evaluate the distortion of the decoded pictures.
3.	Average Bjøntegaard delta rates (BD-Rate) [1] for all test sequences will be gathered to compare the coding efficiency.

Anchors of HM 16.22 [2] and VTM-23.2 [3] coded with QPs = {22, 27, 32, 37} under the random access configurations defined in the HM and VTM common test conditions [4, 5] will be provided. Note that the HM anchor is used for the hybrid and end-to-end tracks, while the VTM anchor is used for the VVC encoder-only track. The released anchor data will include the bit-rates corresponding to the four QPs for each sequence.

Additional constraints for the first two tracks (i.e., the hybrid NN-based and end-to-end video codec) are listed as follows:
1.	It is required that the proposed method must generate four bit-streams for each sequence, targeting the anchor bit-rates corresponding to the four QPs.  For each sequence, the lowest bit-rate point of the proposed method must be in the range of 80% to 120% of the anchor bit-rate at the lowest bit-rate point and the highest bit-rate point of the proposed method must be in the range of 80% to 120% of the anchor bit-rate at the highest bit-rate point;
2.	Only one single decoder shall be utilized to decode all the bitstreams;
3.	The intra period in the proposed submission shall be no larger than that used by the anchor in compressing the validation and test sequences.

While for the NN enhanced VVC encoder track, the additional requirements are listed as follows:
1.	The docker file shall have the capability of encoding the test sequences to generate VTM-compatible bitstreams;
2.	It is required that the proposed method must generate four bit-streams for each sequence, targeting at the anchor bit-rates corresponding to the four QPs. For each test point, the bit-rate of the proposed method must be in the range of 90% to 110% of the anchor bit-rate;
3.	The VTM-23.2 decoder is utilized to decode generated bitstreams to get reconstructed YUV files and use those YUV files to calculate the PSNR values. All the generated bitstreams MUST be decoded successfully;
4.	The VTM-23.2 encoder is utilized as the anchor encoder. For each test point, denote the encoding time of the proposed encoder as T1, the encoding time of VTM-23.2 encoder as T2, T1 and T2 should satisfy: T1 <= 70% T2. Note that T1 and T2 shall be evaluated on the same platform with single thread (e.g., Intel(R) Xeon(R) Platinum 8336C CPU @ 2.30GHz, NVIDIA A100-SXM4-80GB GPU). Encoding time comparison will be verified by the organizers.

Proposed Documents

A docker container with the executable scheme must be submitted for result generation and cross-check. Each participant is invited to submit an ISCAS paper, which must describe the following items in detail.
￮	The methodology
￮	The training data set
￮	Detailed rate-distortion data (comparison with the provided anchor is encouraged)
￮	Complexity analysis of the proposed solutions is encouraged for the paper submission.

Participation

•	Registration
To participate, please indicate your interests by either visiting the registration link, scanning the QR code or contacting Dr. Yue Li. Please make sure to complete this step by October 15th to ensure your participation is recorded. If you successfully register, you will receive an acknowledgement via email confirming your participation. 
￮	The registration link: https://bytedance.us.larkoffice.com/share/base/form/shrusSlTu8D38aTeE9ETM6iYK9f
￮	Registration QR code:
 

•	Important Dates

20 September 2025: The organizers release the validation set as well as the corresponding test information to those who have expressed interest (for example, frame rates and intra periods) and template for performance reporting (with rate-distortion points for the validation set)

12 October 2025: Deadline of paper submission (aligned with Special Sessions) for participants
•	Submission to this Special Session should be through ePapers (coming soon)

28 December 2025: Participants upload a docker container for the first two tracks (i.e., the hybrid NN-based and end-to-end video codec) with a decoder, wherein only the single decoder shall be utilized for decoding all the bitstreams; or for the third track (i.e., NN enhanced VVC encoder track) with an encoder, wherein only the single VVC encoder shall be utilized for generating all the bitstreams.

8 January 2026: Organizers release the test sequences (including frame rate, corresponding rate-distortion points, etc.)

19 January 2026: Paper acceptance notification

31 January 2026: Participants upload compressed bitstreams and decoded YUV files

9 February 2026: Deadline of fact sheets submission for participants

9 February 2026: Camera-ready paper submission deadline 

TBA: Paper presentation at ISCAS 2026

TBA: Awards announcement (at the ISCAS 2026 banquet)

References

[1]	Bjøntegaard, “Calculation of average PSNR differences between RD-Curves,” ITUT SG16/Q6, Doc. VCEG-M33, Austin, Apr. 2001.
[2]	https://vcgit.hhi.fraunhofer.de/jvet/HM/-/tree/HM-16.22
[3]	https://vcgit.hhi.fraunhofer.de/jvet/VVCSoftware_VTM/-/tree/VTM-23.2
[4]	Common Test Conditions and Software Reference Configurations for HM (JCTVC-L1100)
[5]	VTM and HM common test conditions and software reference configurations for SDR 4:2:0 10 bit video (JVET-AB2010)

Organizer Biographies

Li Zhang received the Ph.D. degree in Computer Science from the Institute of Computing Technology, Chinese Academy of Sciences, in 2009. She is currently the Lead of the Multimedia Lab at Bytedance Inc., San Diego. Previously, she held research roles at Qualcomm Inc. and Peking University. Dr. Zhang’s research interests include 2D/3D image and video coding, processing, and transmission. She has made extensive contributions to major international standards, including H.266/VVC, AVS, IEEE 1857, MPEG G-PCC, JPEG AI, and the 3D extensions of HEVC. She has co-chaired multiple ad hoc groups and core experiments, served as an Editor for AVS, and was the Main Editor of the Software Test Model for 3DV. Her contributions have been recognized with multiple Certificates of Appreciation from the IEEE Standards Association. She has authored over 600 adopted standardization proposals, holds more than 900 granted U.S. patents, and has published over 180 technical papers in journals, conferences, and book chapters. Her work has earned multiple accolades, including Best Paper at ISCAS 2022, Top 15 Best Paper at ICME 2025, and Top 10 Best Paper at IEEE PCS 2021. She has also led teams to 1st place in international challenges such as CVPR CLIC, CVPR NTIRE, and ECCV AIM. Dr. Zhang serves as an Associate Editor for the IEEE Transactions on Circuits and Systems for Video Technology and is a member of the IEEE Multimedia Signal Processing Technical Committee (2025–2027). She is Senior Program Committee for AAAI 2026, Area Chair for ICME 2025, TPC for ICIP 2025 workshop, Sponsorship Co-Chair for MMSP 2024, and Industrial Liaison Chair for PCS 2024. She actively organizes special sessions and grand challenges at leading international conferences and was a panelist in the DCC 2025 discussion on “The Future of Video Coding”.
 
Jizheng Xu received a Ph.D. degree in electrical engineering from Shanghai Jiaotong University, China in 2011. He joined Microsoft Research Asia in 2003 and served as a Research Manager and joined ByteDance multimedia lab as a Research Scientist in 2018. He has authored and co-authored over 140 refereed conference and journal refereed papers. His research interests include image and visual signal representation, image/video compression and communication, computer vision, and deep learning. He has been an active contributor to ISO/MPEG and ITU-T video coding standards, including H.264/AVC, H.265/HEVC, and VVC/H.266. He initiated the screen content coding in H.265/HEVC and was a major technical contributor. He chaired and co-chaired the ad-hoc group of exploration on wavelet video coding in MPEG, and various technical ad-hoc groups in JCT-VC, e.g., on screen content coding, on parsing robustness, on lossless coding. He was an Associate Editor for the IEEE Transactions on Circuits and Systems for Video Technology from 2018 to 2020. He served as a Guest Editor for the special issue on Screen Content Video Coding and Applications of the IEEE Journal on Emerging and Selected Topics in Circuits and Systems in 2016. He co-organized and co-chaired special sessions on scalable video coding, directional transform, high-quality video coding at various conferences.
 
Kai Zhang received the B.S. degree in computer science from Nankai University, Tianjin, China, in 2004. In 2011, he received the Ph.D. degree in computer science from the Institute of Computing Technology, Chinese Academy of Sciences, Beijing, China. From 2011 to 2012, he worked as a researcher in Tencent Inc. Beijing, China. From 2012 to 2016, he worked as a team manager in Mediatek Inc. Beijing, China, leading a research team to propose novel technologies to emerging video coding standards. From 2016 to 2018, he worked in Qualcomm Inc. San Diego, CA, still focusing on video coding standardization. Now, he is leading the standardization team in Bytedance Inc. San Diego, CA. Dr. Zhang’ research interests include video/image compression, coding, processing and communication, especially video coding standardization. From 2006, he has contributed more than 500 proposals to JVT, VCEG, JCT-VC, JCT-3V, JVET and AVS, covering many important aspects of major standards such as H.264/AVC, HEVC, 3D-HEVC, VVC and AVS-1,2,3. He has 800+ granted or pending U.S. patents applications. Most of these patents are essential to popular video coding standards. During the development of VVC, Dr. Zhang co-chaired several core experiments and branch of groups. Currently, Dr. Zhang serves as a coordinator of the reference software known as ECM in JVET, to explore video coding technologies beyond VVC. Dr. Zhang has co-authored 100+ papers and reviewed 80+ papers on top-tier journals/conferences. He was a TPC member for VCIP 2018 and DCC 2024. He was an organizer of the Grand Challenge on Neural Network-based Video Coding in ISCAS 2022/2023/2024. Now he is the AE of IEEE T-CSVT and IET-IP.
 
Yue Li received a B.S. and Ph.D. degrees in electronic engineering from the University of Science and Technology of China, Hefei, China, in 2014 and 2019, respectively. He is currently a Research Scientist with Bytedance Multimedia Lab, San Diego, CA, USA. His research interests include image/video coding and processing. He has authored 50+ neural network-based standardization contributions to the Versatile Video Coding (VVC). He has authored/co-authored 25+ papers on well-known journals/conferences such as T-IP, T-CSVT, CSUR, ICIP, ICME, DCC, etc. He also serves as a reviewer for those journals/conferences.

Junru Li received a B.S. degree in telecommunication engineering from Shandong University, Jinan, China, in 2015 and a Ph.D. degree in computer applied technology from Peking University, Beijing, China, in 2021. In 2019, he joined the Department of Computer Science, City University of Hong Kong, as a Research Assistant. He is currently doing research work on image/video coding as a Research Scientist in Bytedance Inc., San Diego. He has been actively participating in the development of VVC and AVS3 standards and contributed over 120+ proposals to JVET, IEEE 1857, and AVS. He served/serves as ad-hoc group co-chairs, software coordinators, and core experiment coordinators for JVET and AVS. He has authored 30+ articles in journals and conferences on video coding, such as TIP, TCSVT, CVPR, and DCC. His research interests include data compression, image/video coding, and multimedia signal processing.
