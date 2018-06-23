class Solution:
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        if len(s) is 0: return None
        same_dict = {}
        # dict_len = 0
        for i in range(len(s)): 
            for j in range(len(s)):
                if i is len(s) - j - 1: continue
                identical = []
                if s[i] is s[len(s) - j - 1]:
                    if i in same_dict: same_dict[i] = same_dict[i] + [len(s) - j - 1]
                    else: same_dict[i] = [len(s) - j - 1]
                    # dict_len += 1
        seq = []
        seq_rev
        seq_dict = {}
        max_seq_len = 0
        print("same_dict = ", same_dict)
        # keys may not be sequential, account for this
        # what if longest subsequence is 1?
        for i in range(len(s)):
            print("i, i + 1 = ", (i, i + 1))
            if i in same_dict and i + 1 in same_dict:
                print("same_dict[i], same_dict[i + 1] = ", (same_dict[i], same_dict[i + 1]))
                for j in range(len(same_dict[i])):
                    for k in range(len(same_dict[i + 1])):
                        print("same_dict[i][j], same_dict[i + 1][k] = ", (same_dict[i][j], same_dict[i + 1][k]))
                        if same_dict[i][j] is same_dict[i + 1][k] + 1:
                            seq.append(s[i]) 
                            print("seq appended = ", seq)
            elif i in same_dict and i + 2 in same_dict:
                print("median division?")
                print("i is ", i, ", i - 1 is ", i - 1, " i - 1 in same_dict = ", same_dict)
                # if i - 1 in same_dict: 
                seq.append(s[i])
                print("seq appended = ", seq)
                if i + 2 in same_dict:
                    print("indeed, len(seq) = ", len(seq))
                    seq_dict[len(seq)] = seq
                    print("seq_dict modified = ", seq_dict)
                    if max_seq_len <= len(seq): 
                        max_seq_len = len(seq)
                seq = []
        print("sequence = ", seq_dict)              
            
