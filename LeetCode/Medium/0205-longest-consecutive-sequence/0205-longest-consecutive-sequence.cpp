class Solution {
public:
    int longestConsecutive(vector<int> &num) {
   unordered_map<int, int> map;
   int Maxlen = 0;
    for(int i = 0; i < num.size(); i++)
     map[num[i]] = 1;

   for(vector<int>::iterator it = num.begin(); it != num.end(); it++)
   {
	   if(map[*it])
	   {
		   map[*it] = 0;
		   int left = *it-1;
		   int right = *it+1;
		   int len = 1;

		   while(map.count(left) && map[left])
		   {			   
			   len++;
			   map[left--] = 0;
		   }

		   while(map.count(right) && map[right])
		   {
			   len++;
			   map[right++] = 0;
		   }

		   if(len > Maxlen)
			   Maxlen = len;
	   }
   }
   return Maxlen;
    }
};