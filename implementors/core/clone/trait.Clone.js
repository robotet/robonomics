(function() {var implementors = {};
implementors["node_cli"] = [{"text":"impl Clone for Extensions","synthetic":false,"types":[]}];
implementors["node_primitives"] = [{"text":"impl Clone for TokenSymbol","synthetic":false,"types":[]},{"text":"impl Clone for CurrencyId","synthetic":false,"types":[]}];
implementors["node_runtime"] = [{"text":"impl Clone for SessionKeys","synthetic":false,"types":[]},{"text":"impl Clone for Runtime","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl Clone for Origin","synthetic":false,"types":[]},{"text":"impl Clone for OriginCaller","synthetic":false,"types":[]},{"text":"impl Clone for Call","synthetic":false,"types":[]}];
implementors["pallet_robonomics_datalog"] = [{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Event&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Clone for Pallet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_datalog_xcm"] = [{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Event&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Clone for Pallet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_digital_twin"] = [{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Event&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Clone for Pallet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_launch"] = [{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Event&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Clone for Pallet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_launch_xcm"] = [{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Event&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Clone for Pallet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_liability"] = [{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Event&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Clone for Pallet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_robonomics_rws"] = [{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Event&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Clone for Pallet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; Clone for Call&lt;T&gt;","synthetic":false,"types":[]}];
implementors["parachain_runtime"] = [{"text":"impl Clone for SessionKeys","synthetic":false,"types":[]},{"text":"impl Clone for Runtime","synthetic":false,"types":[]},{"text":"impl Clone for Event","synthetic":false,"types":[]},{"text":"impl Clone for Origin","synthetic":false,"types":[]},{"text":"impl Clone for OriginCaller","synthetic":false,"types":[]},{"text":"impl Clone for Call","synthetic":false,"types":[]}];
implementors["robonomics_cli"] = [{"text":"impl Clone for SinkCmd","synthetic":false,"types":[]},{"text":"impl Clone for SourceCmd","synthetic":false,"types":[]}];
implementors["robonomics_protocol"] = [{"text":"impl Clone for Message","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Datalog&gt; Clone for RecordCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Record: Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Datalog&gt; Clone for NewRecordEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Record: Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Datalog&gt; Clone for EreaseCall&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Datalog&gt; Clone for ErasedEvent&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Datalog&gt; Clone for DatalogStore&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Launch&gt; Clone for LaunchCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::AccountId: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Parameter: Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Launch&gt; Clone for NewLaunchEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Parameter: Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Clone for Robonomics","synthetic":false,"types":[]}];
implementors["substrate_ros_api"] = [{"text":"impl&lt;P, Client&gt; Clone for Author&lt;P, Client&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Client, Block:&nbsp;Block&gt; Clone for FullChain&lt;Client, Block&gt;","synthetic":false,"types":[]},{"text":"impl&lt;BE, Client, Block:&nbsp;Block&gt; Clone for FullState&lt;BE, Client, Block&gt;","synthetic":false,"types":[]},{"text":"impl&lt;B, H&gt; Clone for System&lt;B, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Block,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: ExHashT + Clone + Sync,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["substrate_ros_msgs"] = [{"text":"impl Clone for Bool","synthetic":false,"types":[]},{"text":"impl Clone for String","synthetic":false,"types":[]},{"text":"impl Clone for UInt64","synthetic":false,"types":[]},{"text":"impl Clone for Time","synthetic":false,"types":[]},{"text":"impl Clone for TriggerRes","synthetic":false,"types":[]},{"text":"impl Clone for TriggerReq","synthetic":false,"types":[]},{"text":"impl Clone for Trigger","synthetic":false,"types":[]},{"text":"impl Clone for StateCallReq","synthetic":false,"types":[]},{"text":"impl Clone for StateCallRes","synthetic":false,"types":[]},{"text":"impl Clone for RawExtrinsic","synthetic":false,"types":[]},{"text":"impl Clone for SystemHealthRes","synthetic":false,"types":[]},{"text":"impl Clone for GetBestHeadRes","synthetic":false,"types":[]},{"text":"impl Clone for PendingExtrinsicsReq","synthetic":false,"types":[]},{"text":"impl Clone for GetFinalizedHeadReq","synthetic":false,"types":[]},{"text":"impl Clone for SystemHealthReq","synthetic":false,"types":[]},{"text":"impl Clone for StorageHashReq","synthetic":false,"types":[]},{"text":"impl Clone for RemoveExtrinsicRes","synthetic":false,"types":[]},{"text":"impl Clone for GetBlockReq","synthetic":false,"types":[]},{"text":"impl Clone for StorageSizeReq","synthetic":false,"types":[]},{"text":"impl Clone for SubmitExtrinsicReq","synthetic":false,"types":[]},{"text":"impl Clone for GetBlockRes","synthetic":false,"types":[]},{"text":"impl Clone for GetBlockHeaderRes","synthetic":false,"types":[]},{"text":"impl Clone for StorageKey","synthetic":false,"types":[]},{"text":"impl Clone for GetBlockHashRes","synthetic":false,"types":[]},{"text":"impl Clone for StorageQueryReq","synthetic":false,"types":[]},{"text":"impl Clone for StorageHashRes","synthetic":false,"types":[]},{"text":"impl Clone for PendingExtrinsicsRes","synthetic":false,"types":[]},{"text":"impl Clone for StorageKeysRes","synthetic":false,"types":[]},{"text":"impl Clone for SystemHealthInfo","synthetic":false,"types":[]},{"text":"impl Clone for GetBestHeadReq","synthetic":false,"types":[]},{"text":"impl Clone for SubmitExtrinsicRes","synthetic":false,"types":[]},{"text":"impl Clone for StorageKeysReq","synthetic":false,"types":[]},{"text":"impl Clone for ExHash","synthetic":false,"types":[]},{"text":"impl Clone for BlockHash","synthetic":false,"types":[]},{"text":"impl Clone for StorageSizeRes","synthetic":false,"types":[]},{"text":"impl Clone for RemoveExtrinsicReq","synthetic":false,"types":[]},{"text":"impl Clone for GetFinalizedHeadRes","synthetic":false,"types":[]},{"text":"impl Clone for GetBlockHashReq","synthetic":false,"types":[]},{"text":"impl Clone for GetBlockHeaderReq","synthetic":false,"types":[]},{"text":"impl Clone for StorageQueryRes","synthetic":false,"types":[]},{"text":"impl Clone for StateCall","synthetic":false,"types":[]},{"text":"impl Clone for StorageHash","synthetic":false,"types":[]},{"text":"impl Clone for StorageQuery","synthetic":false,"types":[]},{"text":"impl Clone for GetBlockHeader","synthetic":false,"types":[]},{"text":"impl Clone for StorageSize","synthetic":false,"types":[]},{"text":"impl Clone for GetBlockHash","synthetic":false,"types":[]},{"text":"impl Clone for GetBlock","synthetic":false,"types":[]},{"text":"impl Clone for RemoveExtrinsic","synthetic":false,"types":[]},{"text":"impl Clone for GetBestHead","synthetic":false,"types":[]},{"text":"impl Clone for StorageKeys","synthetic":false,"types":[]},{"text":"impl Clone for PendingExtrinsics","synthetic":false,"types":[]},{"text":"impl Clone for SystemHealth","synthetic":false,"types":[]},{"text":"impl Clone for SubmitExtrinsic","synthetic":false,"types":[]},{"text":"impl Clone for GetFinalizedHead","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()