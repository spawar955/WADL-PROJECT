int mod =  1e9 + 7;
#define ll long long
#include<bits/stdc++.h>
using namespace std;
void solve()
{
    ll n,m;
    cin>>n>>m;

    ll a[n]={};
    vector<ll> v;
    map<ll,ll> mm;
    for(ll i=0;i<n;i++){
        cin>>a[i];
        mm[a[i]]++;
        if(a[i]>0 && mm[a[i]]==1){
            v.push_back(a[i]);
        }
    }
    if(v.size()==m){
        cout<<m<<endl;
        return ;
    }
    if(v.size()==0){
        cout<<min(m,max(mm[-1],mm[-2]))<<endl;
        return;
        // if(mm[-1]>0 && mm[-2]>0){
        //     cout<<2<<endl;
        //     return ;
        // }
        // else{
        //     cout<<1<<endl;
        //     return ;
        // }
    }

    sort(v.begin(), v.end());
    ll zz= (*v.rbegin()) - (*v.begin()) - v.size() + 1;
    
    ll score1=v.size();
    ll bef=mm[-1],af=mm[-2];
    
    score1+=min(m-v.size(),af);

    ll score2=v.size();
    if(mm[m]>0){
        score2--;
    }
    score2+=min(bef,m - v.size());
    // cout<<score1<<" "<<score2<<endl;

    ll score=max(score2,score1);

    for(ll i=0;i<v.size();i++){
        ll sscore=v.size();
        ll xx=bef,yy=af;

        sscore+=(min(v[i] - i -1, bef));
        xx-=(min(v[i] - 1 - i, bef));
        sscore+=min(m - v[i] - (v.size() - i - 1), af );

        score=max(score,sscore);
    }

    cout<<score<<endl;

    
}
int main()
{
    ll t;
    cin>>t;
    for(ll tc=0;tc<t;tc++){
       solve();
    }

return 0;
}